//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    //TODO:deleteMany

    db.collection('Users').deleteMany({name: 'Helge Hus'}).then((res) => console.log(res.result));

    //TODO:deleteOne

    //db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((res) => console.log(res.result));

    //TODO:findOneAndDelete

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ae9c6719318294a65354a9e')}).then((result) => console.log(result));


    //db.close();
});