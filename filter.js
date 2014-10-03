var fs = require('fs');
var p = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list) {
    for(var i = 0; i < list.length; ++i) {
        if(p.extname(list[i]) === '.' + ext) {
            console.log(list[i]);
        }
    }
});

