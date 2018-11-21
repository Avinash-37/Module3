var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var TaskSchema = new Schema({
  title: {
    type: String,
    default:'Nodejs'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});


var todoTask = module.exports = mongoose.model('Tasks', TaskSchema);
