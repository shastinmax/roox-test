import React from 'react';

import {ButtonTypeProps} from "../../../types/ButtonType";
import style from "../../UsersInfo/UsersInfo.module.scss";

export const Button = (props:ButtonTypeProps) => {
    const{text,onHandlerCLick}=props

    return (
        <button onClick={onHandlerCLick} className='btn'>{text}</button>
    );
};

