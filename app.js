// フォローボタンをクリックしたときの処理
function followButtonClicked() {
  // フォローボタンの要素を取得
  const followButton = document.querySelector('#follow-button');

  // フォローボタンの表示テキストを変更
  followButton.textContent = 'フォロー中';

  // フォロー数の要素を取得
  const followerCount = document.querySelector('#follower-count');

  // フォロー数を1増やす
  followerCount.textContent = parseInt(followerCount.textContent) + 1;

  // フォロー状態をサーバーに送信する処理を実行
  sendFollowStatus(true);
}

// ツイートボタンをクリックしたときの処理
function tweetButtonClicked() {
  // ツイート内容を取得
  const tweetText = document.querySelector('#tweet-text').value;

  // ツイート内容が空の場合は何もしない
  if (tweetText.trim() === '') {
    return;
  }

  // ツイートをサーバーに送信する処理を実行
  sendTweet(tweetText);

  // ツイートフォームをリセット
  document.querySelector('#tweet-form').reset();

  // ツイート成功メッセージを表示
  alert('ツイートしました！');
}
