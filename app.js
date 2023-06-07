require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { pusherServer } = require("./lib/pusher");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CLIENT_URL
}));

// app.post('/send', sendMessage)
app.post('/send', (req, res) => {
    try {
        console.log('reached')
        // console.log(req.body)
        const { text } = req.body;

        console.log('TEXT', text)

        pusherServer.trigger("chat", "incoming-message", { text });

        res.status(200).send('OK')
    } catch (error) {
        res.status(401).send(error.message)
    }

})
app.get('/', (req, res) => res.send('Hello'))

module.exports = app;