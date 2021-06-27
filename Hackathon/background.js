// features:
// background code - intro

/*
chrome.app.runtime.onLaunched.addListener(function (launchData) {
    chrome.app.window.create(
      // Url
      'popup.html',
      // CreateWindowOptions
      {
              'width': 400,
              'height': 500
      },
      // Callback
      function(win) {
          win.contentWindow.launchData = launchData;
          win.maximize();
          win.show();
      });
  });
  
  addEventListener("click", function() {
      var
            el = document.documentElement
          , rfs =
                 el.requestFullScreen
              || el.webkitRequestFullScreen
              || el.mozRequestFullScreen
      ;
      rfs.call(el);
  });

*/

/*
chrome.tabs.onActivated.addEventListener("load", tab => {
    if(/^https:\/\/www\.google/.test(current_tab_info.url)) {
        chrome.tabs.insertCSS(null, {file: './foreground.js'})
        chrome.tabs.executeScript(null, {file: './foreground.js'})
    }
})
*/

chrome.runtime.onMessage.addEventListener("load", (request, sender, sendResponse) => {
    if(request.message === 'CHECK MESSAGE') {
        chrome.tabs.sendResponse(tabid, {message: 'Welcome to the PositiviTea Extension!'});
        sendResponse({message: 'You will receive reminders to complete tasks during the day for self care!'});
        chrome.storage.local.get("password", value => {
            console.log(value);
        });
    }
});