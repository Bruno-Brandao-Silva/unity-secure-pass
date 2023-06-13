let onOffInput: boolean = true;


chrome.runtime.onStartup.addListener(function () {
	chrome.storage.local.get('onOffInput', function (result) {
		var data = result.onOffInput;
		console.log('Dados recuperados:', data);
		if (data===undefined) {
			chrome.storage.local.set({ 'onOffInput': true }, function () {
				console.log('Dados salvos com sucesso!');
			});
			onOffInput = true;
		} else {
			onOffInput = data;
		}
	});
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.status === 'init') {
		sendResponse({ checkboxState: onOffInput });
	} else if (request.status === 'change') {
		onOffInput = request.checkboxState;
		chrome.storage.local.set({ 'onOffInput': onOffInput }, function () {
			console.log('Dados salvos com sucesso!');
		});
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
