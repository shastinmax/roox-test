import React from 'react';

import {InputChangedPropsType} from "../../../types/usersType";

export const InputChanged = (props:InputChangedPropsType) => {
    const {title,name}=props

    return (
        <div>
            <label>
                <span>{title}</span>
                <input placeholder={name} type="text"/>
            </label>
        </div>
    );
};
