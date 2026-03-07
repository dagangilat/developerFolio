// fetch.js
const https = require('https');
const fs = require('fs');

const githubUser = process.env.GITHUB_USERNAME || 'your-github-username';
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