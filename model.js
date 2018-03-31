const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    middleName: String,
    lastName: String,
    phoneNumber: String,
    address: String
});

const documentSchema = new Schema({
    bucketKey: String,
    title: String,
    createdOn: Date,
    lastUpdated: Date,
});

const eventSchema = new Schema({
    title: String,
    date: Date,
    allDay: Boolean,
    start: Date,
    end: Date,
    url: String
});

module.exports = {
    User: mongoose.model('User', userSchema),
    Document: mongoose.model('Document', documentSchema),
    Event: mongoose.model('Event', eventSchema),
};