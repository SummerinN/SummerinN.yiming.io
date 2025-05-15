let chatData = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getChatData") {
    console.log("Returning chat data:", chatData);
    sendResponse({ chatData });
  } else if (message.action === "storeChatData") {
    chatData = message.data;
    console.log("Chat data stored:", chatData);
    sendResponse({ status: "success" });
  }
});
