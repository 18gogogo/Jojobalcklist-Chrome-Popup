chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: chrome.runtime.getURL('index.html'),
    type: 'popup',
    width: 1200,
    height: 800
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendData") {
        // 處理接收到的數據
        console.log("Received data:", request.data);
        
        // 可以選擇發送回應
        sendResponse({status: "success"});
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendData") {
        // 處理接收到的數據
        console.log("Received data:", request.data);
        
        // 可以選擇發送回應
        sendResponse({status: "success"});
    }
});
