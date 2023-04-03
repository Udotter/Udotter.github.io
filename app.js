let tweets = [];

function postTweet() {
  const tweetInput = document.getElementById('tweet');
  const tweetValue = tweetInput.value;
  if (tweetValue) {
    tweets.unshift(tweetValue);
    tweetInput.value = '';
    showTweets();
  }
}

function showTweets() {
  const tweetsContainer = document.getElementById('tweets');
  tweetsContainer.innerHTML = '';
  for (let tweet of tweets) {
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');
    tweetDiv.innerText = tweet;
    tweetsContainer.appendChild(tweetDiv);
  }
}
