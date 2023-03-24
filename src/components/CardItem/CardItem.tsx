import React, { useEffect, useState } from 'react';
import style from './CardItem.module.scss';
import Sapogi from '../../images/CardsImages/Сапоги.png'
type AlertProps = {
    cardType: number;
    Pole: string[];
    keyt: number;
    plusPerepolnen?: (num:number, bol:boolean) => void;
    minMax?: number[];
    startPerepolnen?: number;
    isBack?: boolean;
    children?: JSX.Element[];
    NumbersExist?: boolean[];
    targetFont: string;
    setPole?: (text: string[]) => void;
};
const Card = ({setPole, targetFont, NumbersExist, isBack, keyt, cardType, Pole, minMax, plusPerepolnen, startPerepolnen, children}: AlertProps): JSX.Element => {
    let descriptionMain, descriptionText;
    useEffect(() => {
        descriptionMain = document.getElementById("Card " + keyt);
        descriptionText = document.getElementById("CardControl " + keyt);;
        if (descriptionText && descriptionMain) {
            let size = minMax? minMax[1] : 10;
            descriptionText.style.fontSize = size + 'px';
            while (descriptionText.scrollHeight > descriptionMain.offsetHeight && Number(size) >= Number(minMax ? minMax[0]: 8)) {
                size = size - 0.05;
                descriptionText.style.fontSize = size + 'px';
            }
            if (Number(size) < Number(minMax ? minMax[0] : 8)) {
                if (plusPerepolnen) plusPerepolnen(keyt, true);
            }
            else {
                if (plusPerepolnen) plusPerepolnen(keyt, false);
            }
        }
    }, [startPerepolnen]);
    const getPole = (num: number) => {
        return (Pole[num]);
    };
    if (isBack) {
        return (
            <div className={style.MainBack + ' ' + style[targetFont]}>
                <div className={style.Inside}>
                    <div>
                        <div className={style.Zagolovok}><div>{"Сапоги-скороходы"}</div></div>
                        <div className={style.Per}><div>{"Снаряжение"}</div></div>
                    </div>
                    <div className={style.Description}><div>{"Выглядят как обычные сапоги, но на самом деле увеличивают вашу скорость вдвое"}</div></div>
                </div>
                <div className={style.DowtText}><div>{""}</div></div>
            </div>
        );
    }
    else {
        return (
            <div className={style.Main + ' ' + style[targetFont]}>
                <div className={style.Zagolovok}><div>{"Сапоги"}</div></div>
                <div className={style.Inside}>
                    <img src={Sapogi} alt="" />
                    <div className={style.Description}><div>{"Выглядят как обычные сапоги"}</div></div>
                </div>
                <div className={style.DowtText}><div>{""}</div></div>
            </div>
        );
    }
}

export default Card;