
function tweetCounter () {

  var twt = prompt("Test your tweet here");
  var lgt = twt.length;
  var okay = twt.slice(0,140);
  var max = 140;
  alert("You have written " + lgt + " characters. You have " + (max-lgt) + " left.");
  alert("Your readable tweet will be something like: " + okay);
  alert(prompt("Test your tweet here").slice(0,140))
  
}

tweetCounter();