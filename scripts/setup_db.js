const fs = require('fs');
const path = require('path');
const { neon } = require('@neondatabase/serverless');
const { Pool } = require('@neondatabase/serverless');

// Load environment variables from .env.local
const envPath = path.resolve(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach((line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) {
        envVars[key.trim()] = values.join('=').trim();
    }
});

const connectionString = envVars.DATABASE_URL;

if (!connectionString) {
    console.error("Error: DATABASE_URL not found in .env.local");
    process.exit(1);
}

// Create connection
const sql = neon(connectionString);

async function main() {
    console.log("Connecting to database...");

    try {
        // Create 'project' table
        await sql`CREATE TABLE IF NOT EXISTS project (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT,
      description TEXT,
      moreinfo TEXT
    )`;
        console.log("✅ Created table: project");

        // Create 'certificate' table
        await sql`CREATE TABLE IF NOT EXISTS certificate (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT,
      description TEXT,
      moreinfo TEXT
    )`;
        console.log("✅ Created table: certificate");

        // Insert dummy data if table is empty
        const fileCount = await sql`SELECT count(*) FROM project`;
        if (fileCount[0].count === '0') {
            await sql`INSERT INTO project (name, image, description, moreinfo) VALUES 
        ('Example Project 1', '/path/to/image1.jpg', 'Description for project 1', 'https://example.com/1'),
        ('Example Project 2', '/path/to/image2.jpg', 'Description for project 2', 'https://example.com/2')`;
            console.log("✅ Inserted dummy data into project");
        }

        const certCount = await sql`SELECT count(*) FROM certificate`;
        if (certCount[0].count === '0') {
            await sql`INSERT INTO certificate (name, image, description, moreinfo) VALUES 
        ('Example Certificate 1', '/path/to/cert1.jpg', 'Description for certificate 1', 'https://example.com/cert1')`;
            console.log("✅ Inserted dummy data into certificate");
        }

        // Create 'experience' table
        await sql`CREATE TABLE IF NOT EXISTS experience (
            id SERIAL PRIMARY KEY,
            job_title TEXT NOT NULL,
            company TEXT NOT NULL,
            duration TEXT NOT NULL,
            description TEXT
        )`;
        console.log("✅ Created table: experience");

        const expCount = await sql`SELECT count(*) FROM experience`;
        if (expCount[0].count === '0') {
            await sql`INSERT INTO experience (job_title, company, duration, description) VALUES 
            ('Software Engineer Intern', 'Tech Company Co.', 'June 2024 - August 2024', 'Developed web applications using Next.js and Supabase.'),
            ('Research Assistant', 'University Lab', 'Jan 2024 - May 2024', 'Assisted in AI and Computer Vision research.')`;
            console.log("✅ Inserted dummy data into experience");
        }

    } catch (err) {
        console.error("Error creating tables:", err);
    }
}

main();
