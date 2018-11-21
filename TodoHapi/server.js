'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const todoController =  require('./controllers/todo');
const MongoDBUrl = 'mongodb://localhost:27017/todoapi';

const server = new Hapi.Server({
  port: 3021,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/todos',
  handler: todoController.list
});

server.route({
  method: 'GET',
  path: '/todos/{id}',
  handler: todoController.get
});
server.route({
  method: 'POST',
  path: '/todos',
  handler: todoController.create
});

(async () => {
  try {  
    await server.start();
    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, {useNewUrlParser:true}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {  
    console.log(err)
  }
})();
