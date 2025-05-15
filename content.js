// 提取聊天内容
function extractChatData() {
  const messages = [];
  document.querySelectorAll(".group.w-full").forEach((element) => {
    // 获取发言者角色
    const roleElement = element.querySelector(".flex.items-center span");
    const role = roleElement?.innerText?.trim() || "unknown";

    // 获取消息内容
    const contentElement = element.querySelector(".markdown");
    const content = contentElement?.innerText?.trim() || "";

    // 添加到结果数组
    messages.push({
      role,
      content,
      timestamp: Date.now(), // 当前时间（可替换为实际时间戳）
    });
  });
  return messages;
}

// 调试：提取并打印聊天数据
const chatData = extractChatData();
console.log("Extracted chat data:", chatData);

// 如果需要发送到 background.js，可以用以下代码
chrome.runtime.sendMessage({ action: "storeChatData", data: chatData }, (response) => {
  if (response.status === "success") {
    console.log("Chat data sent successfully.");
  } else {
    console.error("Failed to send chat data.");
  }
});
