CREATE TABLE IF NOT EXISTS experiences (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    period VARCHAR(100) NOT NULL,
    description TEXT,
    logo TEXT
);

-- Sample Data (Optional)
INSERT INTO experiences (company, role, period, description) VALUES
('Company A', 'Frontend Developer', '2023 - Present', 'Developing the main product using React and Next.js.'),
('Company B', 'Software Engineer', '2021 - 2023', 'Worked on backend services with Node.js and PostgreSQL.');
