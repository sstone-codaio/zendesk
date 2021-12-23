// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        const target = document.querySelector(selector);
        if (target != null) {
            callback(target);
            return;
        }
        else {
            setTimeout(function () {
            if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                return;
            loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}
  
function myInitCode() {
    waitForElementToDisplay(".apps.workspace", (targetContainer) => {
        const toast_entry_point = document.createElement('div');
        toast_entry_point.id = 'toast';
        document.querySelector('body').appendChild(toast_entry_point);

        const foreground_entry_point = document.createElement('div');
        foreground_entry_point.id = 'foreground';
        let reactJS_script = document.createElement('script');
        reactJS_script.src = 'foreground.js';
        foreground_entry_point.appendChild(reactJS_script);
        targetContainer.appendChild(foreground_entry_point);
    });
}

if (document.readyState !== 'loading') {
    myInitCode();
} else {
    window.addEventListener('DOMContentLoaded', (event) => {
        myInitCode();
    });
}

