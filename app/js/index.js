const csv = require('csv');
const fs = require('fs');

let newQuote = document.getElementById('new-quote');
let quotePlace = document.getElementById('quote-placeholder');
let twitterButton =document.getElementsByClassName('twitter-share-button')[0];
$('#tweet').hide();

// var parser = csv.parse({delimiter: ','}, function(err, data){
// 	//console.log(err);
// 	var index = Math.floor(Math.random() * data.length);

//   	// for(let i = 0; i < data.length; i++){
//   	// 	row = data[i];
//   	// 	console.log(row);
  		
//   	// }
//   	let row = data[index];



// });


// //csv to read through the parser
// fs.createReadStream(__dirname + '/quotes.csv').pipe(parser);
// console.log(fs.existsSync(__dirname + '/quotes.csv'));


let progress = 0;
//let increment = Math.ceil(100/quotes.length);
let quote;
let author;

function reset(){
	// for(let i = 0; i < quotes.length; i++){
	// 	quotes[i].shown = false;
	// }

	$('#button-place').html('<button class="btn btn-danger" id="new-quote">New Quote</button>');
    newQuote = document.getElementById('new-quote');
    newQuote.addEventListener('click', displayQuotes);
    //progress = 0;
    //$('.progress-bar').css('width', progress + '%');
}

function displayQuotes(){
	$('#tweet').show();

	var parser = csv.parse({delimiter: ','}, function(err, data){
	
		var index = Math.floor(Math.random() * data.length);

	  	let row = data[index];
	  	quote = row[index];
		author = row[index];

		let text =  quote + '<br> -' + author;
		//quotes[index].shown = true;
		$('#quote-placeholder').html(text);
		// progress += increment;
		// $('.progress-bar').css('width', progress + '%');	

		// if(progress >= 100){
		// 	$('#button-place').html('<button class="btn btn-danger" id="reset">Reset</button>');
		// 	document.getElementById('reset').addEventListener('click', reset);
		// }

	});

	//csv to read through the parser
	fs.createReadStream(__dirname + '/quotes.csv').pipe(parser);	
}

function tweetQuote(){
	let href = 'https://twitter.com/intent/tweet?text=';
	twitterButton.href = href + encodeURI(quote) + ' -' + encodeURI(author);
}

newQuote.addEventListener('click', displayQuotes);

twitterButton.addEventListener('click', tweetQuote);