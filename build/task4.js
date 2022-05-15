"use strict";
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
console.log(stringWavePattern('hello'));
console.log(stringWavePattern(' h e y '));
console.log(stringWavePattern(''));
// result
// [ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]
// [ ' H e y ', ' h E y ', ' h e Y ' ]
// []
