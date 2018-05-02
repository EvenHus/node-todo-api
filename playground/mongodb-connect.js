//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert todos', error);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    db.collection('Users').insertOne({
        name: 'Helge Hus',
        age: 54,
        location: 'Skånevik'
    }, (err, res) => {
        if (err) {
            console.log('Unable to insert users', err);
        }

        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    });

    db.close();
});