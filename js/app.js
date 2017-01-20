let newQuote = document.getElementById('new-quote');
let quotePlace = document.getElementById('quote-placeholder');


let quotes = [{
				quote: 'History is a vast early warning system.', 
				author: 'Norman Cousins'
			  },
			  {
				quote: 'How we spend our days is, of course, how we spend our lives.',
				author: 'Annie Dillard'
			  },
			  {
				quote: 'A woman is like a Tea Bag. You never know how strong she is until she gets into hot water.',
				author: 'Eleanor Roosevelt'
			  }		
			 ];

let index = 0;
let text = '';
newQuote.addEventListener('click', function(){
	text = quotes[index].quote + '<br> ' + quotes[index]['author'];
	$('#quote-placeholder').html(text);
});
