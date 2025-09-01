document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

const contentIframe = document.getElementById('content-iframe');

// 頁面載入時，預先載入表單
contentIframe.src = 'https://tally.so/r/w2Dq6b';

// 觀看名單按鈕：不需登入，先提示，後載入頁面
document.getElementById('checkEmailButton').addEventListener('click', function() {
  alert('記得登入 JOJOBLACKLIST 會員唷!!');
  contentIframe.src = 'https://18gogogo.top/joweb.html';
});
