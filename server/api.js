var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var amqp = require('amqplib/callback_api');

const connection = (closure) => {
    return MongoClient.connect('mongodb://vince:pass@192.168.43.12:27017/local', (err, db) => {
        if (err) {
            return console.log(err);
        }
        closure(db);
    });
}

let response = {
    status: 200,
    message: null,
    data: []
}

var sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);
}

router.post('/lumiere', function (req, res) {
    console.log("POST");
    amqp.connect('amqp://localhost', function (err, conn) {
        conn.createChannel(function (err, ch) {
            var q = 'lumiereState';
            ledState = req.body.state;
            console.log(ledState);
            ch.assertQueue(q, { durable: false });
            // Note: on Node 6 Buffer.from(msg) should be used
            ch.sendToQueue(q, new Buffer(ledState));
            console.log(" [x] Sent %s", ledState);
            res.json({sent:true, state: ledState})
        });
        setTimeout(function() { conn.close();}, 500);
    });
});

router.get('/test', (req, res) => {
    res.status(200).send("Welcome to our restful API");
})

module.exports = router;