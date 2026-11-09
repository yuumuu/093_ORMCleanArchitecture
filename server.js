const express = require('express');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.APP_PORT || 3000;

