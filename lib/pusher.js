
const PusherServer  = require('pusher')
const PusherClient = require('pusher-js')

exports.pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: "ap2",
    useTLS: true,
});

exports.pusherClient = new PusherClient(
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    {
        cluster: "ap2",
    }
);