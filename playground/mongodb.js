// CRUD Operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    //CREATE
   
    // db.collection('users').insertOne({
    //     name: 'Shakil',
    //     age: 27
    // });
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: true
    //     }, {
    //         description: 'Task 2',
    //         completed: false
    //     }, {
    //         description: 'Task 3',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // });

    //READ 

    // db.collection('tasks').findOne({_id: new ObjectID("5f71aed37efbc5277824e2a4")}, (error, result) => {
    //     if(error){
    //         return console.log('error fetching data from database');
    //     }

    //     console.log(result)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, result) => {
    //     if(error){
    //         return console.log(error);
    //     }

    //     console.log(result)
    // })

    //UPDATE

    // db.collection('tasks').updateOne({
    //     _id: new ObjectID("5f71aed37efbc5277824e2a4")
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) =>{
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

    //DELETE
    // db.collection('tasks').deleteOne({
    //     description: "Task 1"
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

    // db.collection('tasks').deleteMany({
    //     completed: true
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // });

});