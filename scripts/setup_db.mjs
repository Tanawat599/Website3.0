import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';

const envPath = path.resolve(process.cwd(), '.env.local');

if (!fs.existsSync(envPath)) {
    console.error('.env.local file not found at', envPath);
    process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const match = envContent.match(/DATABASE_URL=(.+)/);

if (!match) {
    console.error('DATABASE_URL not found in .env.local');
    process.exit(1);
}

let databaseUrl = match[1].trim();
// Remove potential surrounding quotes
if ((databaseUrl.startsWith('"') && databaseUrl.endsWith('"')) ||
    (databaseUrl.startsWith("'") && databaseUrl.endsWith("'"))) {
    databaseUrl = databaseUrl.slice(1, -1);
}

console.log('Connecting to database...');
const sql = neon(databaseUrl);

const schemaPath = path.resolve(process.cwd(), 'sql/schema.sql');
if (!fs.existsSync(schemaPath)) {
    console.error('Schema file not found at', schemaPath);
    process.exit(1);
}

const schemaSql = fs.readFileSync(schemaPath, 'utf-8');

// Split by semicolon, but be careful ensuring we don't split inside strings if possible.
// For this simple schema, splitting by ";\n" or just ";" is likely fine.
const statements = schemaSql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0);

console.log(`Found ${statements.length} SQL statements to execute.`);

async function runMigration() {
    try {
        for (const statement of statements) {
            console.log(`Executing: ${statement.substring(0, 50)}...`);
            await sql.query(statement);
        }
        console.log('Migration completed successfully.');
    } catch (e) {
        console.error('Migration failed:', e);
        process.exit(1);
    }
}

runMigration();
