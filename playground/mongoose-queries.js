const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


/*let id = '5aeaf6383493eb9420f5392311';

if (!ObjectID.isValid(id)){
    console.log('Id not valid');
}*/
/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todo: ', todos);
});

Todo.findOne({_id: id}).then((todo) => console.log('Todo: ', JSON.stringify(todo, undefined, 2)));
*/

/*Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found.');
    }
    console.log('Todo by id: ', JSON.stringify(todo, undefined, 2))
}).catch((e) => console.log(e));*/

let userId = '5aeacbe1147d33861c667763';

if (!ObjectID.isValid(userId)) {
    console.log('User id is not valid');
}

User.findById(userId).then((user) => {
    if (!user) {
        console.log('User not found');
    }
    console.log('User:', user);
}).catch((e) => console.log(e));