"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// const WordList = require("./2of4brif.json");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.isWord = functions.https.onRequest((request, response) => {
    const WordList = [
        "apple",
        "banana",
        "carrot",
    ];
    const word = request.url.match(/[?&]word=(\w+)/);
    if (word) {
        const out = (WordList.indexOf(word[1]) > -1);
        response.send(word[1] + " in word? " + out);
    }
    else {
        response.send("no word parameter specified in url");
    }
});
//# sourceMappingURL=index.js.map