import React, { useState } from 'react';
import { useEffect } from 'react';
import classNames from 'classnames';
// @ts-ignore
import Emitter from '../emitter.ts';

function Toast() {
    const [toastText, setToastText] = useState('');
    useEffect(() => {
        Emitter.on('INPUT_FROM_MAIN', ({payload}: {payload: string}) => {
            setToastText(payload);
        });
        const timer = setTimeout(() => {
            setToastText('');
        }, 2000);

        return () => {
            Emitter.off('INPUT_FROM_MAIN');
            clearTimeout(timer);
        }
    })
         
    return (
        <div className={classNames("toast", {active: toastText.length > 0})}>
            {toastText}
        </div>
    );
}

export default Toast;
