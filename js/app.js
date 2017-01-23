let newQuote = document.getElementById('new-quote');
let quotePlace = document.getElementById('quote-placeholder');


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
			  	'quote': '\"I am not an angel,\" I asserted; \"and I will not be one till I ' + 
			  			'die: I will be myself. Mr. Rochester, you must neither expect nor ' + 
			  			'exact anything celestial of me - for you will not get it, any more ' + 
			  			'than I shall get it of you: which I do not at all anticipate.\"',
			  	'author': 'Charlotte Bront&#235',
			  	'description': 'Author of Jane Eyre',
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
			  	'quote': '\"Lighthouses don\'t go running all over an island looking for boats to ' + 
			  			'save\; they just stand there shining.\"',
			  	'author': 'Anne Lamott, author',
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
			  	'description': 'Poet and writer ',
			  	'shown': false
			  },
			  {
			  	'quote': '\"First we eat, then we do everything else.\"',
			  	'author': 'M.F.K. Fisher',
			  	'description': '',
			  	'shown': false
			  }

			 ];

//let index = 0;
let progress = 0;

newQuote.addEventListener('click', function(){
	let index = Math.floor(Math.random() * quotes.length);
	
	if(quotes[index].shown == false){
		let text =  quotes[index].quote + '<br> -' + quotes[index].author;
		quotes[index].shown = true;
		$('#quote-placeholder').html(text);
		progress += 10;
		$('.progress-bar').css('width', progress + '%');
	}
	
	//index++;
	

	
});
