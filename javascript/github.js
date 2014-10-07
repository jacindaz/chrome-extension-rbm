$.ajax({
    dataType: "json",
    url: "https://api.github.com/users/jacindaz",
    success: function(json) {
        githubSuccess();
        console.log("JSON: " + json + "\n");
        console.log("Name: ", json["name"]);
        console.log("Login: ", json["login"]);
    },
    error: function(e) { githubFailure() }
});

function githubSuccess() {
    console.log("Github ajax success");
}

function githubFailure() {
    console.log("Unable to call Github API.");
    //alert("Unable to call Github API.");
}
