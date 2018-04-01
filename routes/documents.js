const express = require('express');
const router = express.Router();
const response = require('/response');
const S3 = require('aws-sdk/clients/s3');


// add new document
router.post('/documents', (req, res) =>  {
    let data = [];
    req.on('data', (chunk) => {
        data.push(chunk);
    });
    req.on('end', () => {
        // send to s3
    });
});

// get document
router.get('/documents/:id', (req, res) => {

});

// get all documents
router.get('/documents', (req, res) => {

});

// delete event
router.delete('/documents/:id', (req, res) => {

});

// update document
router.put('/documents/:id', (req, res) => {

});





module.exports = router;
