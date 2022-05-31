import React from 'react';

import preloader from '../../../assets/image/Preloader/Preloader.svg'

import s from './Preloader.module.scss'

export const Preloader = () => (
    <div className={s.preloader}>
        <img className={s.preloader__img} src={preloader} alt="loader"/>
    </div>
);

