const users = require('./users.js');

usersObj = {
    getAllUsers: function () {
        users.find();
    };
    getUserById: function () {
        users.findOne();
    };
    getAllAdminUsers: function () {
        users.find();
    };
    getAllNonAdminUsers: function () {
        users.find();
    };
    getAllUsersWithSpecifiedFavorite: function () {
        users.find(favorites);
    };
    getAllUsersWithAgeUnderGivenAge: function () {
        users.find(age);

    };
    getUserByLast_Name: function () {
        users.findOne(query, value);

    };
    getUserByEmail: function () {
        users.findOne(email);

    };
    getUserByState: function () {
        users.find(val);

    };
    addNewUser: function () {
        users.add(userObj);

    };
    updateUserByID: function () {
        users.update(userId, object);

    };
    deleteUserByID: function () {
        users.remove(userId);

    };
};