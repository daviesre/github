var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("#username-find").click(function() {
    console.log("hello");
    var username = $("#username").val();
    $("#username").val("");
    exports.getRepos = function(){
      $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    };
  });
});
