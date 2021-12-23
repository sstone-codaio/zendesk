import React from 'react';
import { ReactNode } from "react";

interface Props {
    children?: React.ReactNode | React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

function ButtonView(props: Props) {
    const {onClick, children} = props;
    return (
    <span className={'buttonView'}
        onClick={onClick}
    >
        {children}
    </span>
    );
}

export default ButtonView;