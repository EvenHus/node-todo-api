//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    /*db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (error) => {
        if (error) {
            console.log('Unable to fetch todos', error)
        }
    });*/

    const queryName = 'Helge Hus';

    db.collection('Users').find({name: `${queryName}`}).toArray().then((docs) => {
        console.log(`Users with name ${queryName}:`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if (err) {
            console.log('Unable to fetch users', err);
        }
    });

    db.close();
});