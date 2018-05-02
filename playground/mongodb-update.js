//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    //TODO:findOneAndUpdate

    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ae9c3079318294a65354993')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => console.log(res));*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae9b427d38fd617467c3fb8')
    }, {
        $set: {
            name: 'Even'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => console.log(res));

    //db.close();
});