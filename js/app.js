let newQuote = document.getElementById('new-quote');
let quotePlace = document.getElementById('quote-placeholder');
let twitterButton =document.getElementsByClassName('twitter-share-button')[0];
$('#tweet').hide();

let quotes = [{
				'quote': '\"People will forget what you said and did, but they will never ' +
						'forget how you made them feel.\"',
				'author': 'Maya Angelou',
				'description': '',
				'shown': false
			  },
			  {
				'quote': '\"History is a vast early warning system.\"', 
				'author': 'Norman Cousins, editor and author',
				'description': '',
				'shown': false
			  },
			  {
				'quote': '\"How we spend our days is, of course, how we spend our lives.\"',
				'author': 'Annie Dillard, The Writing Life',
				'description': '',
				'shown': false
			  },
			  {
				'quote': '\"A woman is like a Tea Bag. You never know how strong she is ' + 
						'until she gets into hot water.\"',
				'author': 'Eleanor Roosevelt',
				'description': '',
				'shown': false
			  },
			  {
			  	'quote': '\"Earth provides enough to satisfy every man\'s needs, but not every ' + 
			  			'man\'s greed.\"',
			  	'author': 'Mahatma Gandhi',
			  	'description': '',
			  	'shown': false
			  },
			  {
			  	'quote': '\"It\'s hard to be religious when certain people are never incinerated by ' + 
			  			'bolts of lightning.\"',
			  	'author': 'Bill Watterson',
			  	'description': 'Comic strip artist of [Calvin & Hobbes]',
			  	'shown': false
			  },
			  {
			  	'quote': '\"I dream of giving birth to a child who will ask, "Mother, what was war?\"',
			  	'author': 'Eve Merriam',
			  	'description': 'Poet and writer',
			  	'shown': false
			  },
			  {
			  	'quote': '\"First we eat, then we do everything else.\"',
			  	'author': 'M.F.K. Fisher',
			  	'description': '',
			  	'shown': false
			  },
			  {
			  	'quote': '\"It does not do to leave a live dragon out of your calculations, ' + 
			  				'if you live near him.',
			  	'author': 'J.R.R. Tolkien',
			  	'description': 'Novelist and philologist',
			  	'shown': false 
			  },
			  {
			  	'quote': '\"The Universe is under no obligation to make sense to you.\"',
			  	'author': 'Neil deGrasse Tyson',
			  	'description': '',
			  	'shown': false
			  }
			 ];


let progress = 0;
let increment = Math.ceil(100/quotes.length);
let quote;
let author;

function reset(){
	for(let i = 0; i < quotes.length; i++){
		quotes[i].shown = false;
	}

	$('#button-place').html('<button class="btn btn-danger" id="new-quote">New Quote</button>');
    newQuote = document.getElementById('new-quote');
    newQuote.addEventListener('click', displayQuotes);
    progress = 0;
    $('.progress-bar').css('width', progress + '%');
}

function displayQuotes(){
	$('#tweet').show();
	let index = Math.floor(Math.random() * quotes.length);

		while(quotes[index].shown != false){
			index = Math.floor(Math.random() * quotes.length);
		}

		quote = quotes[index].quote;
		author = quotes[index].author;
		let text =  quote + '<br> -' + author;
		quotes[index].shown = true;
		$('#quote-placeholder').html(text);
		progress += increment;
		$('.progress-bar').css('width', progress + '%');	

		if(progress >= 100){
			$('#button-place').html('<button class="btn btn-danger" id="reset">Reset</button>');
			document.getElementById('reset').addEventListener('click', reset);
		}
}

function tweetQuote(){
	twitterButton.href += encodeURI(quote) + ' -' + encodeURI(author);
}

newQuote.addEventListener('click', displayQuotes);

twitterButton.addEventListener('click', tweetQuote);