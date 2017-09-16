var path = require('path');

module.exports = function(app){

    // Home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname,'../app/home.html'));
    });

    // Survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../app/survey.html'));
    });
};