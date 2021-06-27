// features:




// code

chrome.tabs.onActivated.addEventListener("load", tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www.google/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: './style.css'});
            chrome.tabs.executeScript(null, {file: '/app.js'});
        }
    });
});

chrome.runtime.onMesssage.addEventListener("load", (request, sender, sendResponse) => {
    if(request.message === 'check storage') {
        sendResponse({message: 'message received'});
        chrome.storage.local.get("password", value => {
            console.log(value);
        })
    }
})

 //colour changing settings
var ColourChange = document.getElementById("settings");
var curColour = 0;
var colours = [["#17252A", "#2B7A78", "#3AAFA9", "#DEF2F1", "#FEFFFF"],[""],[""],[""]];
ColourChange.addEventListener("click", toggleColour);

function toggleColour(){
    
}
