var Todo =  require('../modules/todo');

/**
 * List Task
 */
exports.list = (req, h) => {
  return Todo.find({}).exec().then((todo) => {

    return { todos: todo };

  }).catch((err) => {

    return { err: err };

  });
}


/**
 * Get Task by ID
 */
exports.get = (req, h) => {

  return Todo.findById(req.params.id).exec().then((todo) => {

    if(!todo) return { message: 'Todo not Found' };

    return { todos: todo };

  }).catch((err) => {

    return { err: err };

  });
}


/**
 * POST a Task
 */
exports.create = (req, h) => {

  const todoData = {
    name: req.payload.name,
    uploadedBy: req.payload.uploadedBy,
    date: req.payload.date,
    time: req.payload.time
  };

  return Todo.create(todoData).then((todo) => {

     return { message: "Todo created successfully", todos: todo };

  }).catch((err) => {

    return { err: err };

  });
}

