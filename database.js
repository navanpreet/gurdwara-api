const mongoose = require('mongoose');
const models = require('model');

module.exports = {

    findOne: (resource, query) => {
        let model = models[resource];
        // returns a promise
        return model.find(query);
    },

    findAll: () => {

    },

    insertOne: (resource, data) => {
        let model = models[resource];
        model.create(data)
            .then((doc) => {
                // call response handler
            })
            .catch((err) => {
                // log err and call response handler
            })
    },

    insertMany: () => {

    }
};