const express = require("express");
const app = express();
var processCaptureAPayment = require('./Payments/CoreServices/CapturePayment');
var processPayment = require('./Payments/CoreServices/processPayment');
var standaloneHttpSignature = require('./Authentication/SampleCodes/StandAloneHttpSignature');
var newProcessPayment = require('./Payments/CoreServices/newProcessPayment');
var cajeros = require('./Payments/HSBC/hsbcApi')

data = ''
app.get("/", (req, res) => res.send("Hello World"));
app.listen(3000, () => {
    
    console.log("Server listening on port 3000!")
    // console.log(processCaptureAPayment.processCaptureAPayment());
    // data = standaloneHttpSignature.standaloneHttpSignature();
    // data = cajeros.cajeros();
    // console.log(data);
});

app.get("/Payments", (req, res) => res.send("Tenemos servicios"));
app.get("/CapturePayment", (req, res) => res.send(processPayment.processPayment()));
app.get("/NewPayment", (req, res) => res.send(newProcessPayment.newProcessPayment()));
app.get("/Cajeros", (req, res) => res.send(cajeros.cajeros()));

