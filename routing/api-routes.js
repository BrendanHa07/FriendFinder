var friendData = require('../app/data/friends.js');
var path = require('path');

module.exports = function(app) {

    // API GET request
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
        console.log(res);
    })

    // API POST request
    app.post('/api/friends' , function(req, res) {

        var newFriend = req.body;

        for (var i=0; i < newFriend.score.length; i++) {
            if (newFriend.score[i] === "1 (Strongly Disagree)") {
                newFriend.score[i] = 1;
            } else if(newFriend.score[i] === "2 (Strongly Agree)") {
                newFriend.score[i] = 5;
            } else {
                newFriend.score[i] = parseInt(newFriend.score[i]);
            }
        }

        var differencesArr = [];
        
        for (var i=0; i < friendData.length; i++) {
            var comparedFriend = friendData[i];
            var totalDifference = 0;

            for (var j=0; j < comparedFriend.score.length; j++) {
                var differenceInScore = Math.abs(comparedFriend.score[j] - newFriend[j]);
                totalDifference += differenceInScore;
            }
            differencesArr[i] = totalDifference;
        }

        var bestMatchNum = differencesArr[0];
        var bestMatchIndex = 0;
        
        for (var i=0; i < differencesArr.length; i++) {
            if(differencesArr < bestMatchNum) {
                bestMatchNum = differencesArr[i];
                bestMatchIndex= i;
            }
        }
        friendData.push(newFriend);

        res.json(friendData[bestMatchIndex]);
    });
};