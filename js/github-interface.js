var GitHub = require('./../js/github.js').githubModule;

$(document).ready(function() {
  var currentGithubObject = new GitHub();
  $("#username-find").click(function() {
    var username = $('#username').val();
    $('#username').val("");
    currentGithubObject.getRepos(username);
  });
});
