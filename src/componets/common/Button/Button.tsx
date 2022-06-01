import React from 'react';

import {ButtonTypeProps} from "../../../types/ButtonType";

export const Button = (props: ButtonTypeProps) => {
    const {text, onHandlerCLick, disabled, className} = props

    const onChangeCLick = ()=>{
        if (onHandlerCLick) {
            onHandlerCLick(false)
        }
    }

    return (
        <button onClick={onChangeCLick}
                className={className}
                disabled={disabled}>{text}</button>
    );
};

