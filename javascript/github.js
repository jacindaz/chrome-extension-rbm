OAuth.initialize("FNFvZeTMr7igUlJBATyn4zaWPyI");

//Using popup (option 1)
var results = OAuth.popup('github')
results.done(function(result) {
  //use result.access_token in your API request 
  //or use result.get|post|put|del|patch|me methods (see below)
})
results.fail(function (err) {
  //handle error with err
});