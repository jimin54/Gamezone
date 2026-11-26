// 流量統計(Google Analytics 4)
// 申請好之後,把下面的 G-XXXXXXXXXX 換成你自己的衡量 ID(以 G- 開頭),
// 整個網站的所有頁面就會一起開始統計。還沒換的時候,不會送出任何資料。
(function () {
  var GA_ID = 'G-8WTLTY9N6L';
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
