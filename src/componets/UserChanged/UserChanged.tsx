import React, {useState} from 'react';

import {useFormik} from "formik";

import {UserChangedPropsType, UserSettingsType} from "../../types/usersType";
import {checkValidation} from "../../Utils/checkValidation";
import {Button} from "../common/Button/Button";

import style from './UserChanged.module.scss'

export const UserChanged = ({user, valueDisabled, callback}: UserChangedPropsType) => {
    const {name, username, email, address, phone, website} = user
    const [disabled, setDisabled] = useState<boolean>(false);

    const userSettings: UserSettingsType[] = [
        {formikName: 'name', title: 'Name', inputType: 'text', data: user.name,},
        {formikName: 'username', title: 'User name', inputType: 'text', data: user.username,},
        {formikName: 'email', title: 'E-mail', inputType: 'text', data: user.email,},
        {formikName: 'street', title: 'Street', inputType: 'text', data: user.address.street,},
        {formikName: 'city', title: 'City', inputType: 'text', data: user.address.city,},
        {formikName: 'zipcode', title: 'Zip-code', inputType: 'text', data: user.address.zipcode,},
        {formikName: 'phone', title: 'Phone', inputType: 'text', data: user.phone,},
        {formikName: 'website', title: 'Website', inputType: 'text', data: user.website,},
    ]
    const initialValues = {
        name,
        username,
        email,
        street: address.street,
        city: address.city,
        zipcode: address.zipcode,
        phone,
        website,
        comment: '',
    }

    // @ts-ignore
    const formik = useFormik({
        initialValues,
        validate: values => checkValidation(formik, values, setDisabled),
        onSubmit: (values) => {
            console.log(JSON.stringify(values))

        }
    })

    const onChangedUserClick = () => {
        callback(false)
    }

    return (
        <div className={style.userChanged}>
            <div className={style.userChanged__header}>
                <h2 className={style.userChanged__header_title}>Профиль пользоваетля</h2>
                <Button text='Редактировать' onHandlerCLick={onChangedUserClick}/>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className={style.userChanged__main}>
                    <div>
                        {userSettings.map(d => {
                            const fieldName = d.formikName as keyof typeof initialValues
                             return <div className={style.userChanged__wrapper_input} key={d.formikName}>
                                 <p className={style.userChanged__main_title}>{d.title}</p>
                                 <input className={style.userChanged__main_input}
                                     disabled={valueDisabled}
                                     id={d.formikName}
                                     type='text'
                                     placeholder={d.formikName}
                                     {...formik.getFieldProps(d.formikName)}
                                     style={formik.touched[fieldName] && formik.errors[fieldName] ? {borderColor: 'red'} : undefined}
                                 />
                                 {formik.touched[fieldName] && formik.errors[fieldName]
                                     ? (<div className={style.error}>{formik.errors[fieldName]}</div>)
                                     : null
                                 }
                             </div>
                        })}
                    </div>
                    <label className={style.userChanged__textarea}>
                        <p className={style.userChanged__textarea_title}>Comment</p>
                        <textarea className={style.userChanged__textarea_textarea}
                                  disabled={valueDisabled}
                                  name='comment'
                                  onChange={formik.handleChange}
                                  value={formik.values.comment}/>
                    </label>
                </div>
                <Button disabled={disabled} text='Отправить' />
            </form>
        </div>
    );
};
