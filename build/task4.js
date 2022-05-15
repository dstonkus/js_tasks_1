"use strict";
exports.__esModule = true;
exports.stringWavePattern = void 0;
var stringWavePattern = function (str) {
    var waveArray = [];
    var strArray = str.split('');
    strArray.forEach(function (s, i) {
        if (s !== ' ') {
            var letter = s.toUpperCase();
            var string = str.substring(0, i) + letter + str.substring(i + letter.length);
            waveArray.push(string);
        }
    });
    return waveArray;
};
exports.stringWavePattern = stringWavePattern;
