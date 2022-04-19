require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.post("/", (req, res) => {
  client.messages
    .create({
      body: "This is a test Message",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.TO_PHONE_NUMBER,
    })
    .then((message) => console.log(message.sid));
  console.log("REQ: ", req);
  console.log("RES: ", res);
});

app.listen(app.get("port"), () => {
  console.log(`Server started on port ${app.get("port")}`);
});
