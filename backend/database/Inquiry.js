const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Inquiry = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  country: {
    type: String
  },
  aboutme:{
	  type:String
  }
})

module.exports = mongoose.model('Inquiry', Inquiry)