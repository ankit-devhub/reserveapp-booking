const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  busOwnerID: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  seatBooked: {
    type: [String], // Array of seat numbers
  },
  bus_no: {
    type: String,
    default: '', // Default value if not provided
  },
  amenities_list: {
    type: [String], // Array of amenities
  },
  busFare: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

// Create a model using the schema

module.exports =  mongoose.model('Trip', tripSchema,"trips");
