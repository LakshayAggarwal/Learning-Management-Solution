const express = require('express')
const app = express()
/**
 *  Middleware json and url encoding support
 */
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

/**
 *  Middleware for Route API
 */
app.use('/api', require('./routes/api').route)

var port = Number(process.env.PORT || 8000);


var server = app.listen(port, function() {
        console.log('Listening on port %d', server.address().port);
    });