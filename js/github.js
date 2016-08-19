var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('.showUser').html("<p>Login: " + response.login + "</p><p>Email: " + response.email + "</p><p>Description: " + response.bio + "</p>");
    console.log(response);
  }).fail(function(error){
    $('.showUser').text(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
