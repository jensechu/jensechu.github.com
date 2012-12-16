function random_quote(){
    console.log("random quote is running");

    $.getJSON("/data/quotes.json", function(data) {
	console.log("hellooooo the json is hurr");

	var quotes = data.quotes;
	console.log(quotes);

	var random = quotes[Math.floor(Math.random() * quotes.length)];
	console.log(random);

	$(".random-quote").text(random.quote);
	$(".random-author").text(random.author);

    })
   .error(function(j, t, e) { console.log(e);})
    return false;
}

$(document).ready(function(){
    random_quote();
    $("#random-quote").click(random_quote);
});
