var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
 
  var tesseract = require('node-tesseract');

  // Recognize text of any language in any format
  tesseract.process(__dirname + '/' + process.argv[2], function(err, text) {
    if(err) {
      console.error(err);
      res.send(err);
    } else {
        console.log(text);
        res.send(text);
    }
  });

});

/*app.post('/', function (req, res) {

  fs.writeFile('slika.jpg', req, function(err) {
    if(err) {
        return console.log(err);
    }else
      console.log("The file was saved!");
  }); 

  var tesseract = require('node-tesseract');

  // Recognize text of any language in any format
  tesseract.process(__dirname + '/ugovor.jpg', function(err, text) {
    if(err) {
      console.error(err);
      res.send(err);
    } else {
        console.log(text);
        res.send(text);
    }
  });

  //fs.unlinkSync(__dirname + '/slika.jpg');

});*/

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('ocrServer is listening at http://%s:%s', host, port);
});