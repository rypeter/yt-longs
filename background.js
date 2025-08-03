chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading" && tab.url && tab.url.includes("youtube.com/shorts/")) {
    const redirectedUrl = tab.url.replace("youtube.com/shorts/", "youtube.com/watch?v=");
    chrome.tabs.update(tabId, { url: redirectedUrl });
  }
});
