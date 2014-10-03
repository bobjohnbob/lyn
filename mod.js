var fs = require('fs');
var p = require('path');

module.exports = function(dir, ext, callback) {
    
    fs.readdir(dir,function(err, list) {
        if(err) {
            callback(err);
            return;
        }

        var matches = [];
        for(var i = 0; i < list.length; ++i) {
            if(p.extname(list[i]) === '.' + ext) {
                matches.push(list[i]);
            }
        }

        callback(null, matches);
    });
};
