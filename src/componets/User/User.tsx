import React from 'react';

import {UserType} from "../../types/usersType";

import style from './User.module.scss'

export const User = (props: UserType) => {
    const {name, city, company} = props
    return (
        <div className={style.wrapper__user}>
            <ul>
                <li className={style.wrapper__user_text}>
                    <span className={style.wrapper__user_span}>ФИО:</span>
                    {name}
                </li>
                <li className={style.wrapper__user_text}>
                    <span className={style.wrapper__user_span}>город:</span>
                    {city}
                </li>
                <li className={`${style.wrapper__user_text} ${style.wrapper__user_footer}`}>
                    <div>
                        <span className={style.wrapper__user_span}>компания:</span>
                        {company}
                    </div>
                    <p className={style.wrapper__user_btn}>Подробнее</p>
                </li>
            </ul>
        </div>
    );
};

