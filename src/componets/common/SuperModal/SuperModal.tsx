import React, {memo} from 'react';

import style from './SuperModal.module.css'

export type PropsType = {
    values: any
    callback: (value:boolean) => void
}
export const SuperModal = memo(({values,callback}: PropsType) => {
    const onCloseModal=()=>{
        callback(false)
    }

    return (
        <div>
            <div role="presentation"  onClick={onCloseModal} className={style.wrapper}>
                <div className={style.modal}>
                    <div className={style.closeBtnWrapper}>
                        <button className={style.btnClose}>
                            <span role="presentation" onClick={onCloseModal} className={style.closeIcon}>&times;</span>
                        </button>
                    </div>
                    <h3 className={style.title}>Ну нифига се</h3>
                    <div className={style.formWrapper}>
                        {values}
                    </div>
                </div>
            </div>
        </div>
    );
})
