"use strict";
exports.__esModule = true;
var functions = require("firebase-functions");
// const WordList = require("./2of4brif.json");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!");
});
exports.isWord = functions.https.onRequest(function (request, response) {
    var WordList = [
        "apple",
        "banana",
        "carrot",
    ];
    var word = request.url.match(/[?&]word=(\w+)/);
    if (word) {
        var out = (WordList.indexOf(word[1]) > -1);
        response.send(word[1] + " in word? " + out);
    }
    else {
        response.send("no word parameter specified in url");
    }
});
