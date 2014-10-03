OAuth.redirect('github', "https://github.com/login/oauth/authorize");

OAuth.callback('github')
.done(function(result) {
	console.log("Able to authenticate with github");
	console.log(result);
    //use result.access_token in your API request
    //or use result.get|post|put|del|patch|me methods (see below)
})
.fail(function (err) {
    //handle error with err
    
});

//Let's say the /me endpoint on the provider API returns a JSON object
//with the field "name" containing the name "John Doe"
OAuth.callback(provider)
.done(function(result) {
    result.get('/me')
    .done(function (response) {
        //this will display "John Doe" in the console
        console.log(response.name);
        console.log("Able to authenticate with github");
		console.log(result);
    })
    .fail(function (err) {
        //handle error with err
        console.log('failed to get result');
        alert('failed to get result');
    });
})
.fail(function (err) {
    //handle error with err
    console.log("Failure to authenticate with github!");
    alert("Failure to authenticate with github!");
});