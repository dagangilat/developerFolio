// fetch.js
const https = require('https');
const fs = require('fs');

process = require("process");
require("dotenv").config();

// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
// const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const githubUser = process.env.GITHUB_USERNAME || 'dagangilat';
const options = {
  hostname: 'api.github.com',
  path: `/users/${githubUser}`,
  headers: { 'User-Agent': 'node' }
};

https.get(options, (res) => {
  if (res.statusCode !== 200) {
    console.error('Request failed. Status code:', res.statusCode);
    process.exit(1);
  }

  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    fs.writeFileSync('src/githubProfile.json', body);
    console.log('Fetched GitHub profile');
  });
}).on('error', (err) => {
  console.error('Request error:', err);
  process.exit(1);
});