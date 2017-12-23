var tableDate = new Date();
document.getElementById("date").innerHTML = tableDate.toDateString();
var newsid = [15769238, 15771168, 15771561, 15771183, 15772174, 15770557, 15772303, 15772340, 15769807, 15772547, 15772008, 15772398,
  15772247, 15770681, 15769457, 15771497, 15771779, 15771318, 15770921, 15767516, 15771337, 15771785, 15770439,
  15770609, 15771250, 15768195, 15769070, 15771679, 15769054, 15771156
];
var newslist = [];
var xhttp = [];
//fetching news from hackernews and store it in an array
for (var i = 0; i < newsid.length; i++) {

  xhttp[i] = new XMLHttpRequest();

  xhttp[i].onreadystatechange = readyState(i);

  function readyState(i) {
    return function() {
      if (xhttp[i].readyState == 4 && xhttp[i].status == 200) {
        var resTxt = JSON.parse(xhttp[i].responseText);
        newslist.push({
          title: resTxt.title,
          score: resTxt.score,
          comments: resTxt.descendants,
          time: resTxt.time,
          url: resTxt.url
        });
      }
      createNewsItemElements();
    };
  }

  xhttp[i].open("GET", "https://hacker-news.firebaseio.com/v0/item/" + newsid[i] + ".json?print=pretty", true);
  xhttp[i].send();
}


//getting dom to use later for creating li elements
var divElement = document.getElementById("content");
var storielist = document.getElementById("stories");

//sorting news array by score
function sortByScore() {
  storielist.innerHTML = "";
  newslist.sort(function(a, b) {
    return b.score - a.score;
  });
  createNewsItemElements();
}

//sorting news array by comments
function sortByComments() {
  storielist.innerHTML = "";
  newslist.sort(function(a, b) {
    return b.comments - a.comments;
  });
  createNewsItemElements();
}

//creating news array by data (newest first)
function sortByDate() {
  storielist.innerHTML = "";
  newslist.sort(function(a, b) {
    return a.time - b.time;
  });
  createNewsItemElements();
}

//converting timestamp to readable date
function unixTime(time) {

  var t = new Date(time * 1000);
  var year = t.getFullYear();
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = months[t.getMonth()];
  var day = t.getDate();
  var date = day + " " + month + " " + year;
  return date;

}


//create stories
function createNewsItemElements() {
  storielist.innerHTML = "";
  for (var i = 0; i < newslist.length; i++) {
    var link = document.createElement("a");
    var title = document.createTextNode(newslist[i].title);
    link.appendChild(title);
    link.href = newslist[i].url;
    var liStorie = document.createElement("li");
    var scorelist = document.createElement("ul");
    var liScore = document.createElement("li");
    var score = document.createTextNode(unixTime(newslist[i].time) + " | " + newslist[i].comments + " | " + newslist[i].score);
    liScore.appendChild(score);
    scorelist.appendChild(liScore);
    liStorie.appendChild(link);
    liStorie.appendChild(scorelist);
    storielist.appendChild(liStorie);
    divElement.appendChild(storielist);
  }

}
