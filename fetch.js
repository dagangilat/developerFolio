// fetch.js
const https = require('https');
const fs = require('fs');

process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_TOKEN) {
    console.error("REACT_APP_GITHUB_TOKEN not set in .env");
    process.exit(1);
  }
  if (!GITHUB_USERNAME) {
    console.error("GITHUB_USERNAME not set in .env");
    process.exit(1);
  }

  const query = JSON.stringify({
    query: `{
      user(login: "${GITHUB_USERNAME}") {
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers { totalCount }
                url
                id
                diskUsage
                primaryLanguage { name color }
              }
            }
          }
        }
      }
    }`
  });

  const options = {
    hostname: 'api.github.com',
    path: '/graphql',
    method: 'POST',
    headers: {
      'User-Agent': 'node',
      'Authorization': `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(query)
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => { body += chunk; });
    res.on('end', () => {
      if (res.statusCode !== 200) {
        console.error('GitHub GraphQL request failed. Status:', res.statusCode, body);
        process.exit(1);
      }
      fs.writeFileSync('public/profile.json', body);
      console.log('Fetched GitHub profile and pinned repos -> public/profile.json');
    });
  });

  req.on('error', (err) => {
    console.error('Request error:', err);
    process.exit(1);
  });

  req.write(query);
  req.end();
}