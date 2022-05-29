import React, {useEffect, useState} from "react";

import {usersType} from "../../types/usersType";

import style from "./UsersInfo.module.scss";

export const UsersInfo = () => {
    const [userData, setUserData] = useState<Array<usersType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setUserData(json))
    },[])

    return (
        <div className='container'>
            <div className={style.wrapperUsers}>
                <div className={style.wrapperUsers__sort}>
                    <p className={style.wrapperUsers__sort_title}>Сортировка</p>
                    <button className={style.wrapperUsers__sort_btn}>по городу</button>
                    <button className={style.wrapperUsers__sort_btn}>по компании
                    </button>
                </div>
                <div className={style.wrapperUsers__users}>
                    <h2 className={style.wrapperUsers__users_title}>Список
                        пользователей</h2>
                    {userData.map(user => (
                        <User key={user.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
