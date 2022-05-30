import React from 'react';

import {UserType} from "../../types/usersType";

import style from './User.module.scss'

export const User = (props: UserType) => {
    console.log('user')
    const {user, callback} = props
    const {name,address,company} = user

    const onMoreClick = ()=>{
        callback(user)
    }

    return (
        <div className={style.wrapper__user}>
            <ul>
                <li className={style.wrapper__user_text}>
                    <span className={style.wrapper__user_span}>ФИО:</span>
                    {name}
                </li>
                <li className={style.wrapper__user_text}>
                    <span className={style.wrapper__user_span}>город:</span>
                    {address.city}
                </li>
                <li className={`${style.wrapper__user_text} ${style.wrapper__user_footer}`}>
                    <div>
                        <span className={style.wrapper__user_span}>компания:</span>
                        {company.name}
                    </div>
                </li>
            </ul>
            <button onClick={onMoreClick} className={style.wrapper__user_btn}>Подробнее</button>
        </div>
    );
};

