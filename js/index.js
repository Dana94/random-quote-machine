const csv = require('csv');
const fs = require('fs');

var parser = csv.parse({delimiter: ','}, function(err, data){
  	for(let i = 0; i < data.length; i++){
  		row = data[i];
  		
  	}


});

  //csv to read through the parser
  fs.createReadStream('../quotes.csv').pipe(parser);

