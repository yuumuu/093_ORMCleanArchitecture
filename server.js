const express = require('express');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
