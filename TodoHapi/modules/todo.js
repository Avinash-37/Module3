'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoModel = new Schema({
  name: { type: String, required: 'Kindly enter the name of the task' },
  uploadedBy: { type: String, required: true },
  date: { 
	type: Date,
	default: Date.now, 
	required: true 
	},
  time:{
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Todo', todoModel, 'todo'); 

