const likeBtns = document.querySelectorAll('.like-btn');
const retweetBtns = document.querySelectorAll('.retweet-btn');
const followBtns = document.querySelectorAll('.follow-btn');

likeBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('liked');
	});
});

retweetBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		alert('この投稿をリツイートしました！');
	});
});

followBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		alert('このユーザーをフォローしました！');
	});
});

