import React from 'react';

import {ButtonTypeProps} from "../../../types/ButtonType";

export const Button = (props:ButtonTypeProps) => {
    const{text,onHandlerCLick,disabled}=props

    return (
        <button onClick={onHandlerCLick} className='btn' disabled={disabled}>{text}</button>
    );
};

