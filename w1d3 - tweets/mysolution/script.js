let tweet_temp = document.querySelector("#tweet_template").content;
let gallery = document.querySelector("#gallery");
let endpoint = "https://kea-alt-del.dk/twitter/api/?count=50?hashtag=greece";

function fetchTweets() {
  console.log(endpoint);
  fetch(endpoint)
    .then(e => e.json())
    .then(showTweets);
}

function showTweets(data) {
  console.log(data);
  data.statuses.forEach(showSingleTweet);
}

function showSingleTweet(aTweet) {
  let clone = tweet_temp.cloneNode(true);

  clone.querySelector("#userName").textContent = aTweet.user.name;
  clone.querySelector("#postDate").textContent = aTweet.created_at;
  clone.querySelector("#postText").textContent = aTweet.text;
  gallery.appendChild(clone);
}

fetchTweets();
