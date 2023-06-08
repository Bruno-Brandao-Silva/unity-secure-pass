let onOffInput: boolean = true;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.status === 'init') {
		sendResponse({ checkboxState: onOffInput });
	} else if (request.status === 'change') {
		onOffInput = request.checkboxState;
		sendResponse({})
	}
});


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (!onOffInput) return;
	if (changeInfo.status === 'complete' && tab.url?.indexOf('chrome://') === -1) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id! },
			files: ['content.js'],
			world: 'MAIN'
		})
	}
});
