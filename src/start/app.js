const express = require('express');
const httpSecurityMiddleware = require('./middleware/http-security-middleware');

const app = express();

app.use(httpSecurityMiddleware);

app.use(express.json());

module.exports = app;
