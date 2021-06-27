var quoteButton = document.getElementById("generate");
quoteButton.addEventListener("click", quoteGen);
var generatedQuote = "";
function quoteGen(){
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    generatedQuote= data[Math.floor(Math.random()*1000)].text + " - " + data[Math.floor(Math.random()*1000)].author;
    document.getElementById("quote") = generatedQuote;
  });
}