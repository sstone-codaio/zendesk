import React from 'react';
import { render } from 'react-dom';
// @ts-ignore
import Foreground from './components/Foreground.tsx';
// @ts-ignore
import Toast from './components/Toast.tsx';

import './style.less';

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

waitForElementToDisplay(".apps.workspace", () => {
    render(<Foreground />, document.querySelector('#foreground'));
    render(<Toast />, document.querySelector('#toast'));
});