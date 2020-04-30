const express = require('express')
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
const todoRoutes = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json())

const uri = "mongodb+srv://yudz:AdDU2201400119084W@cluster0-hu5gv.gcp.mongodb.net/todoDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB is Connected!")
})




todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
});


todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added' });
        })
        .catch(err => {
            res.status(400).send('adding new failed')
        });
});

todoRoutes.route('/delete/:id').delete(function (req, res) {
    Todo.findByIdAndDelete(req.params.id, function (err, todo) {

    })
})

todoRoutes.route('/update/:id').post(function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (!todo) {
            res.status(400).send('data not found');
        }
        else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated')
            })
                .catch(err => {
                    res.status(400).send("Update not possible")
                });

        }
    })
})


app.use('/todos', todoRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
})