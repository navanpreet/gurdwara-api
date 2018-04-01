// All HTTP responses go through this

module.exports = {

    success: (res, body) => {
        let code = 200;
        // transform the body to send
        res.status(code);
        res.send(body);
    },

    fail: (failure) => {
        let code = 500;
        if(failure.toLowerCase() === 'unauthorized'){
            code = 200;
        }
    }
};