const express = require('express')
const path = require('path')
const app = express()
/**
 *  Middleware json and url encoding support
 */
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/', require('./routes/api/').route)
app.use('/index.html', express.static(path.join(__dirname, 'public')))

var port = Number(process.env.PORT || 8000);

var server = app.listen(port, function() {
        console.log('Listening on port %d', server.address().port);
});