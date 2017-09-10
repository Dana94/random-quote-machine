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
//fs.createReadStream('../quotes.csv').pipe(parser);
console.log(fs.existsSync('quotes.csv'));

