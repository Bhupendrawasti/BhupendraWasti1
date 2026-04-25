// build.js - Run this before deploying
const fs = require('fs');

const config = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
};

let html = fs.readFileSync('index.template.html', 'utf8');
html = html.replace('{{SUPABASE_URL}}', config.SUPABASE_URL);
html = html.replace('{{SUPABASE_ANON_KEY}}', config.SUPABASE_ANON_KEY);

fs.writeFileSync('index.html', html);
