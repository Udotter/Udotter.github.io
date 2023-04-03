// フォローボタン
const followButton = document.querySelector('.follow-button');
let isFollowing = false;

followButton.addEventListener('click', () => {
  if (isFollowing) {
    followButton.innerText = 'フォローする';
    followButton.style.backgroundColor = '#1DA1F2';
    followButton.style.color = 'white';
  } else {
    followButton.innerText = 'フォロー中';
    followButton.style.backgroundColor = '#E8F5FE';
    followButton.style.color = '#1DA1F2';
  }
  isFollowing = !isFollowing;
});

// ツイートボタン
const tweetButton = document.querySelector('.tweet-button');
tweetButton.addEventListener('click', () => {
  // ツイートを投稿する処理
});

// リツイートボタン
const retweetButton = document.querySelector('.retweet-button');
let isRetweeted = false;

retweetButton.addEventListener('click', () => {
  if (isRetweeted) {
    retweetButton.innerText = 'リツイート';
    retweetButton.style.backgroundColor = 'white';
    retweetButton.style.color = '#1DA1F2';
    retweetButton.style.borderColor = '#1DA1F2';
  } else {
    retweetButton.innerText = 'リツイート済み';
    retweetButton.style.backgroundColor = '#E8F5FE';
    retweetButton.style.color = '#1DA1F2';
    retweetButton.style.borderColor = '#1DA1F2';
  }
  isRetweeted = !isRetweeted;
});

// お気に入りボタン
const favoriteButton = document.querySelector('.favorite-button');
let isFavorited = false;

favoriteButton.addEventListener('click', () => {
  if (isFavorited) {
    favoriteButton.innerText = 'お気に入り';
    favoriteButton.style.backgroundColor = 'white';
    favoriteButton.style.color = '#1DA1F2';
    favoriteButton.style.borderColor = '#1DA1F2';
  } else {
    favoriteButton.innerText = 'お気に入り済み';
    favoriteButton.style.backgroundColor = '#E8F5FE';
    favoriteButton.style.color = '#1DA1F2';
    favoriteButton.style.borderColor = '#1DA1F2';
  }
  isFavorited = !isFavorited;
});
