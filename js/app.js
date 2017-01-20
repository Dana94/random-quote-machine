let newQuote = document.getElementById('new-quote');
let quotePlace = document.getElementById('quote-placeholder');


let quotes = [{
				'quote': 'People will forget what you said and did, but they will never ' +
						'forget how you made them feel.',
				'author': 'Maya Angelou'
			  },
			  {
				'quote': 'History is a vast early warning system.', 
				'author': 'Norman Cousins'
			  },
			  {
				'quote': 'How we spend our days is, of course, how we spend our lives.',
				'author': 'Annie Dillard'
			  },
			  {
				'quote': 'A woman is like a Tea Bag. You never know how strong she is ' + 
						'until she gets into hot water.',
				'author': 'Eleanor Roosevelt'
			  },
			  {
			  	'quote': '\"I am not an angel,\" I asserted; \"and I will not be one till I ' + 
			  			'die: I will be myself. Mr. Rochester, you must neither expect nor ' + 
			  			'exact anything celestial of me - for you will not get it, any more ' + 
			  			'than I shall get it of you: which I do not at all anticipate.\"',
			  	'author': 'Charlotte Bront&#235, Jane Eyre'
			  },
			  {
			  	'quote': 'Earth provides enough to satisfy every man’s needs, but not every ' + 
			  			'man&#39s greed.',
			  	'author': 'Mahatma Gandhi'
			  }

			 ];


newQuote.addEventListener('click', function(){
	let index = Math.floor(Math.random() * quotes.length);
	let text = quotes[index].quote + '<br> -' + quotes[index].author;
	$('#quote-placeholder').html(text);
	
});
