import React, {useEffect, useState} from "react";

import {UsersInfoType} from "../../types/usersType";
import {Button} from "../common/Button/Button";
import {User} from "../User/User";
import {UserChanged} from "../UserChanged/UserChanged";

import style from "./UsersInfo.module.scss";

export const UsersInfo = () => {
    const [userData, setUserData] = useState<Array<UsersInfoType>>([])
    const [userDescr, setUserDescr] = useState<UsersInfoType | null>(null)
    // const[disabled,setDisabled]=useState<boolean>(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUserData(json))
    }, [])

  const setUser=(user:UsersInfoType)=>{
      setUserDescr(user)
    }

    const onSortCityClick=()=>{
        // @ts-ignore
        const sortUserData = [...userData].sort((a, b) => {
                if (a.address.city > b.address.city) {
                    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                    return 1;
                }
                if (a.address.city < b.address.city) {
                    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                    return -1;
                }
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                return 0;
            }
        )
        setUserData(sortUserData)
    }

    const onSortCompanyClick=()=>{
        // @ts-ignore
        const sortUserData = [...userData].sort((a, b) => {
                if (a.company.name > b.company.name) {
                    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                    return 1;
                }
                if (a.company.name < b.company.name) {
                    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                    return -1;
                }
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                return 0;
            }
        )
        setUserData(sortUserData)
    }

    // const onEditClick=(value:boolean)=>{
    //     setDisabled(value)
    // }

    return (
        <div className='container'>
            <div className={style.wrapperUsers}>
                <div className={style.wrapperUsers__sort}>
                    <p className={style.wrapperUsers__sort_title}>????????????????????</p>
                    <Button className='btn' text='???? ????????????' onHandlerCLick={onSortCityClick}/>
                    <Button className='btn' text='???? ????????????????' onHandlerCLick={onSortCompanyClick}/>
                </div>
                {userDescr && <UserChanged user={userDescr} />}
                {!userDescr && <div className={style.wrapperUsers__users}>
                    <h2 className={style.wrapperUsers__users_title}>????????????
                        ??????????????????????????</h2>
                    {userData.map(user => (
                        <User key={user.id} user={user} callback={setUser}/>
                    ))}
                    <p className={style.wrapperUsers__users_footer}> ?????????????? {userData.length} ?????????????????????????? </p>
                </div>}
            </div>
        </div>
    );
};
