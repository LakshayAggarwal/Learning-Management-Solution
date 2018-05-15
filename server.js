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

app.use('/', require('./routes/api/').route)
app.use('/index.html', express.static(path.join(__dirname, 'public')))

const routes = {
    course: require('./routes/api/courses')
}

app.use('/courses', routes.course)
/**
 *  Middleware for Route API
 */



var port = Number(process.env.PORT || 8000);

var server = app.listen(port, function() {
        console.log('Listening on port %d', server.address().port);
    });