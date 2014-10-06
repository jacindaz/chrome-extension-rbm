var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
  'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
  'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
  'consumer_key': 'anonymous',
  'consumer_secret': 'anonymous',
  'scope': 'https://docs.google.com/feeds/',
  'app_name': 'RBM Chrome Extension'
});


// var oauth = ChromeExOAuth.initBackgroundPage({
//   'request_url': "https://github.com/login/oauth/access_token",
//   'authorize_url': "https://github.com/login/oauth/authorize",
//   'access_url': <OAuth access token URL>,
//   'consumer_key': {{client_id}},
//   'consumer_secret': {{client_secret}}
//   //'scope': <scope of data access, not used by all OAuth providers>,
//   //'app_name': <application name, not used by all OAuth providers>
// });

oauth.authorize(function() {
  // ... Ready to fetch private data ...
});

function callback(resp, xhr) {
  // ... Process text response ...
};

function onAuthorized() {
  var url = 'https://docs.google.com/feeds/default/private/full';
  var request = {
    'method': 'GET',
    'parameters': {'alt': 'json'}
  };

  // Send: GET https://docs.google.com/feeds/default/private/full?alt=json
  oauth.sendSignedRequest(url, callback, request);
};

oauth.authorize(onAuthorized);

function onAuthorized() {
  var url = 'https://docs.google.com/feeds/default/private/full';
  var request = {
    'method': 'POST',
    'headers': {
      'GData-Version': '3.0',
      'Content-Type': 'application/atom+xml'
    },
    'parameters': {
      'alt': 'json'
    },
    'body': 'Data to send'
  };

  // Send: POST https://docs.google.com/feeds/default/private/full?alt=json
  oauth.sendSignedRequest(url, callback, request);
};