import React, { useEffect, useState } from 'react';
import style from './CardItem.module.scss';
type AlertProps = {
    Pole: string[];
    keyt: number;
    plusPerepolnen?: (num:number, bol:boolean) => void;
    minMax?: number[];
    startPerepolnen?: number;
    isBack?: boolean;
    targetFont: string;
    cardImg?: string;
    svitok?: string;
};
const Card = ({svitok,cardImg, targetFont, isBack, keyt, Pole, minMax, plusPerepolnen, startPerepolnen}: AlertProps): JSX.Element => {
    let descriptionMain, descriptionText;
    const inputRef = React.useRef<HTMLImageElement>(null)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const selectedFiles = files as FileList;
        let to_file = selectedFiles?.[0]
        let reader_obj = new FileReader();
        reader_obj.readAsDataURL(to_file);
        reader_obj.onload = () => {
            // @ts-ignore
            inputRef.current.src = reader_obj.result
            console.log(inputRef);
        }

    }
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
    if (isBack) {
        return (
            <div className={style.MainBack + ' ' + style[targetFont]}>
                <div className={style.Zagolovok}><div>{Pole[9]}</div></div>
                <div className={style.Per}><div>{Pole[10]}</div></div>
                <div className={style.Description} id={"Card " + keyt}><div id = {"CardControl " + keyt}>{Pole[11]}</div></div>
                <div className={style.DowtText}><div>{Pole[12]}</div></div>
            </div>
        );
    }
    else {
        return (
            <div className={style.Main + ' ' + style[targetFont]}>
                <div className={style.Zagolovok}><div>{Pole[0]}</div></div>
                <div className={style.Inside}>
                    <label>
                    <img src={cardImg} alt="" ref={inputRef} />
                        <input type="file" onChange={onChange}  className={style.hidden} />
                    </label>

                    {Pole[3]!="" ? <div className={style.Description}>
                        <img src={svitok} alt="" />
                        <div>{Pole[3]}</div>
                    </div> : null}
                    {Pole[5]!="" ? <div className={style.Krug + ' ' + style.Krug1}><div>{Pole[5]}</div></div>: null}
                    {Pole[6]!="" ? <div className={style.Krug + ' ' + style.Krug2}><div>{Pole[6]}</div></div>: null}
                    {Pole[7]!="" ? <div className={style.Krug + ' ' + style.Krug3}><div>{Pole[7]}</div></div>: null}
                    {Pole[8]!="" ? <div className={style.Krug + ' ' + style.Krug4}><div>{Pole[8]}</div></div>: null}
                </div>
                <div className={style.DowtText}><div>{Pole[4]}</div></div>
            </div>
        );
    }
}

export default Card;