import React from 'react';
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg';
import style from './BaseTip.module.scss';
type AlertProps = {
    setTargetBase: () => void;
    name: string;
};
const BaseTip = ({setTargetBase, name}: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} onClick={()=>{setTargetBase()}}>
            <div className={style.Name}>{name}</div>
            <ArrowDown className={style.IMG} />
        </div>
    );
}

export default BaseTip;