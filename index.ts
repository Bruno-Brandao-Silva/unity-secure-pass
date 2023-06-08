document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('on-off') as HTMLInputElement;

    chrome.runtime.sendMessage({ status: 'init' }, function (response) {
        checkbox.checked = response.checkboxState;
    });

    checkbox!.addEventListener('change', function () {
        console.log("CHECKBOX: ", checkbox.checked);
        chrome.runtime.sendMessage({ status: 'change', checkboxState: checkbox.checked }).then(function (response) {
            chrome.tabs.reload();
        });
    });
});
