var quotes = ['Live as if you were to die tomorrow. Learn as if you were to live forever',
'That which does not kill us makes us stronger','Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.'
,'We must not allow other people’s limited perceptions to define us','Do what you can, with what you have, where you are'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('QuoteDisplay').innerHTML = quotes[randomNumber];
}

