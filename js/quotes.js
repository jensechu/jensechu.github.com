function random_quote(){
    $.getJSON("/data/quotes.json", function(data) {
	console.log("test");
	var quotes = data.quotes;
	console.log(quotes);


	var random = quotes[Math.floor(Math.random() * quotes.length)];

	console.log(random);

	$(".random-quote").text(random.quote);
	$(".random-author").text(random.author);

    });
    return false;
}

$(document).ready(function(){
    random_quote();

    $("#random-quote").click(random_quote);
});
