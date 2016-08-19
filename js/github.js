var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('.showUser').text("the email of " + username + " is " + response.email);
  }).fail(function(error){
    $('.showUser').text(error.responseJSON.message);
  });
};

exports.githubModule = GitHub;
