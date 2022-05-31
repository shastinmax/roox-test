import React from 'react';

import {InputChangedPropsType} from "../../../types/usersType";

import style from './InputChanged.module.scss'

export const InputChanged = (props: InputChangedPropsType) => {
    const {title, name, disabled} = props

    return (
        <div>
            <label className={style.input}>
                <p className={style.input__title}>{title}</p>
                <input className={style.input__input} value={name} type="text" disabled={disabled}/>
            </label>
        </div>
    );
};
