var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var userCtrl = require('./userCtrl');

var app = express();

app.use(bodyParser.json());

app.get('/api/getAllUsers', usersObj.getAllUsers(); res.status(200).send(users));
app.get('/api/getUserById', usersObj.getUserById(); res.status(200).send());
app.get('/api/getAllAdminUsers', usersObj.getUserById(); res.status(200).send());
app.get('/api/getAllNonAdminUsers', usersObj.getUserById(); res.status(200).send());
app.get('/api/getAllUsersWithSpecifiedFavorite', usersObj.getUserById(); res.status(200).send());
app.get('/api/getAllUsersWithAgeUnderGivenAge', usersObj.getUserById(); res.status(200).send());
app.get('/api/getUserByLast_Name', usersObj.getUserById(); res.status(200).send());
app.get('/api/getUserByEmail', usersObj.getUserById(); res.status(200).send());
app.get('/api/getUserByState', usersObj.getUserById(); res.status(200).send());
app.put('/api/addNewUser', usersObj.getUserById(); res.status(200).send());
app.put('/api/updateUserByID', usersObj.getUserById(); res.status(200).send());
app.delete('/api/deleteUserByID', usersObj.getUserById(); res.status(200).send());



module.exports = userCtrl.usersObj;



app.listen(port, function () {
    console.log('Listening on port', port);
})