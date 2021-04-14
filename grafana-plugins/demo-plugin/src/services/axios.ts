import axios from 'axios';
// import https from 'https'
const https = require('https');

// https.globalAgent.options.rejectUnauthorized = false;

const instance = axios.create({
  baseURL: `https://elastic:9888ZWhz6XgK7y9UOmG61I1M@172.30.31.31:30311`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

// const instance2 = axios.create({
//   baseURL: `https://elastic:9888ZWhz6XgK7y9UOmG61I1M@172.30.31.31:30311`,
//   timeout: 30000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false,
//     cert: fs.readFileSync("./usercert.pem"),
//     key: fs.readFileSync("./key.pem"),
//     passphrase: "YYY"
//   })
// })

export default instance;
