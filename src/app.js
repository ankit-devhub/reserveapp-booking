const express = require('express');
const app = express();
const tripModel = require('./models/trip')
const bodyParser = require('body-parser')
const userModel = require('./models/user');

app.use(bodyParser.json());
const db = require('./config/db/db')
db.on('error', () => {
  console.log('MongoDB connection error');
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send("triggered booking api")
})


app.get('/trips', async (req, res) => {
  try {
    const trips = await tripModel.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(400).json({
      error: "Database Error"
    });
  }
})


app.post('/trips', async (req, res) => {
  try {
    const trip = await tripModel.create(req.body);
    trip.save()
  }
  catch (e) {
    console.log("failed to add data", e);
  }
})






  module.exports = app;