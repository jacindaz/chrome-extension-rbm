onload = function() {
  var login = document.getElementById("login");
  var output = document.getElementById("output");

  login.onclick = function() {
    alert("Inside onclick function")
    console.log("Hello, world!");
    clientID = "c65db5de4ca7df1512f0";
    console.log("Passed my client ID");
    extensionID = 'jhiojkfnaadoghihdajlbmiknpidbpmd';
    var id = {
      url: "https://github.com/login/oauth/authorize?client_id=" + clientID + "&redirect_uri=chrome-extension://" +
      extensionID,
      "interactive": true
    };
    console.log("My id info is: " + id);
    console.log("params is: " + window.location.search)
  };
};