console.log("in background script");

// chrome.runtime.onMessage.addListener( (message, sender, callback) => {
//     if (message.action === 'getCurrentURL') {
//         getActiveTab().then(tab => callback(tab.url));
//         return true;
//     }
//     else {
//         console.log('unexpected message action');
//     }
// });

// function getActiveTab() {
//     return new Promise((resolve, reject) => {
//         chrome.tabs.query({ active: true, currentWindow: true }, tabs => resolve(tabs[0]));
//     });
// }