import React, {useEffect, useState} from "react";

import {UsersInfoType} from "../../types/usersType";
import {User} from "../User/User";

import style from "./UsersInfo.module.scss";

export const UsersInfo = () => {
    const [userData, setUserData] = useState<Array<UsersInfoType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUserData(json))
    }, [])

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
                        <User key={user.id} name={user.name} city={user.address.city}
                              company={user.company.name}/>
                    ))}
                    <p className={style.wrapperUsers__users_footer}> Найдено {userData.length} пользователей </p>
                </div>
            </div>
        </div>
    );
};
