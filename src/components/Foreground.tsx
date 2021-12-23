import React from 'react';
// @ts-ignore
import ButtonView from './ButtonView.tsx';
// @ts-ignore
import Emitter from '../emitter.ts';
// @ts-ignore
import Toast from './Toast.tsx';

function Foreground() {
    const buttons = [
        'Refund Stripe Transaction',
        'Change Shipping Address',
        'Refund Shopify',
    ];
    const onClick = (b: string) => Emitter.emit('INPUT_FROM_MAIN', {payload: b});

    const buttonElements = buttons.map((b, i) => 
        (<ButtonView key={i} onClick={() => onClick(b)}>{b}</ButtonView>)
    );
    return <>
        <div className={`main`}>
            {buttonElements}
        </div>
    </>
}

export default Foreground;
