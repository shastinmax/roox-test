import React from 'react';

import {UserChangedPropsType, UsersInfoType} from "../../types/usersType";
import {Button} from "../common/Button/Button";
import {InputChanged} from "../common/InputChaged/InputChanged";

import style from './UserChanged.module.scss'

export const UserChanged = ({user}: UserChangedPropsType) => {
    const {name, username, email, address, phone, website} = user
    const dataUser = {
        'Name': name,
        'User name': username,
        'E-mail': email,
        'Street': address.street,
        'City': address.city,
        'Zip code': address.zipcode,
        'Phone': address.street,
        'Website': address.street,
    }
    const arrUser = Object.entries(dataUser)
    const onChangedUserClick = () => {

    }
    return (
        <div className={style.userChanged}>
            <div className={style.userChanged__header}>
                <h2 className={style.userChanged__header_title}>Профиль пользоваетля</h2>
                <Button text='Редактировать' onHandlerCLick={onChangedUserClick}/>
            </div>
            <div className={style.userChanged__main}>
                {arrUser.map(infoForInput=>(
                    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                    <InputChanged key={infoForInput[0]+infoForInput[1]} title={infoForInput[0]} name={infoForInput[1]}/>
                ))}
            </div>
        </div>
    );
};
