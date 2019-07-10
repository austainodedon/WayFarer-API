import express from 'express'
import Debug from 'debug'
import {config} from 'dotenv'

config;
const logger = new Debug(`dev`);
const app = express();

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("Hello API");
});

app.listen(port, () => logger(`Server running on port ${port}`));