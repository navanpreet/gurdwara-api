const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const databaseController = require('database');

/* GET users listing. */
router.get('/admin', (req, res) => {

});

// admin login
router.post('/admin/login', (req, res) => {
    let body = req.body;
    let username = req.body.username;
    let password = req.body.password;
    let query = {'username': username};
    databaseController.findOne('User', query)
        .then((doc) => {
            return bcrypt.compare(password, doc.password)
        })
        .then((valid) => {
            if(valid){
                // success
            } else {
                // fail
            }
        })
});

// update
router.put('/admin', (req, res) => {

});



module.exports = router;
