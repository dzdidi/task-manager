var fs = require('fs');
var path = require('path');

module.exports = {
  read: function(name){
    return require(path.join(__dirname, '../tasks/' + name + '.js'));
  }
}