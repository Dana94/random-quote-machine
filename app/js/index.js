const csv = require('csv');
const fs = require('fs');

//$('#quote-placeholder').html("hi!");

var parser = csv.parse({delimiter: ','}, function(err, data){
	console.log(err);
	console.log('hi again');
  	for(let i = 0; i < data.length; i++){
  		row = data[i];
  		console.log(row);
  		
  	}


});

console.log('hi');
//csv to read through the parser
fs.createReadStream(__dirname + '/quotes.csv').pipe(parser);
console.log(fs.existsSync(__dirname + '/quotes.csv'));

