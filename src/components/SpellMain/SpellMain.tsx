import React, { useEffect, useState } from 'react';
import style from './SpellMain.module.scss';
import CardItem from '../CardItem/CardItem';
import { ReactComponent as Setting } from '../../images/Setting.svg';
type AlertProps = {
};
const SpellMain = ({ }: AlertProps): JSX.Element => {
    const [cards, setCards] = useState<string[][]>([]);
    const [newCard, setNewCard] = useState<string[]>([]);
    const [CSV, setCSV] = useState("");
    const newConst = "\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";";
    const [newCSV, setNewCSV] = useState("\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";");
    const [makeCSV, setMakeCSV] = useState(0);
    const [showOptions, setShowOptions] = useState(true);
    const [showRedactor, setShowRedactor] = useState(true);
    const [pyt, setPyt] = useState<File[]|undefined[]>([]);
    const [pytRamka, setPytRamka] = useState<File[]|undefined[]>([]);
    const [openThisBaseCase, setOpenThisBaseCase] = useState([false, false, false, false, false, false, false, false]);
    const [targetOption, setTargetOptions] = useState([false, false, false, false, false, false, false, false, false, false, false]);
    const [colors, setColors] = useState(["#000000","#ffffff","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#5266ff","#ff4747","#6aff57","#000000"]);
    const sizePoleNames = ["--CardZagolovokTextSize","--CardPer1H","--CardPer2H","--CardPer3H","--CardOptionHeigth","--CardOptionBorder","--CardDownTextSize", "--ListH", "--ListW"];
    const sizeTextNames = ["--CardZagolovokTextFont","--CardPer1TextFont","--CardPer2TextFont","--CardPer3TextFont","--CardOptionZagolovokTextFont1","--CardOptionZagolovokTextFont2","--CardOptionZagolovokTextFont3","--CardOptionZagolovokTextFont4","--CardOptionTextTextFont1","--CardOptionTextTextFont2","--CardOptionTextTextFont3","--CardOptionTextTextFont4","--CardDownTextFont","--Number1H","--Number1V","--Number2H","--Number2V","--Number3H","--Number3V","--Number4H","--Number4V", "--Number1Kegl", "--Number2Kegl", "--Number3Kegl", "--Number4Kegl", "--LineHeight"];
    const colorsNames = ["--CardColorBackcground", "--CardZagolovokBackgroundColor", "--CardZagolovokTextColor", "--CardPer1BackgroundColor", "--CardPer1TextColor", "--CardPer2BackgroundColor", "--CardPer2TextColor", "--CardPer3BackgroundColor", "--CardPer3TextColor", "--CardOptionPalki", "--CardOption1Background", "--CardOption2Background", "--CardOption3Background", "--CardOption4Background", "--CardOption1ZColor", "--CardOption2ZColor", "--CardOption3ZColor", "--CardOption4ZColor", "--CardOption1TColor", "--CardOption2TColor", "--CardOption3TColor", "--CardOption4TColor", "--CardMainBackgroundColor", "--CardMainTextColor", "--CardDopBackgroundColor", "--CardDopTextColor", "--CardDownTextColor", "--ListColor", "--Rubaha1", "--Rubaha2", "--Rubaha3", "--Rubaha4", "--Rubaha5", "--Number1", "--Number2", "--Number3", "--Number4", "--Ramka1", "--Ramka2", "--Ramka3", "--Ramka4", "--Ramka5"];
    const alignNames = ["--CardZagolovokTextAlign", "--CardPer1TextAlign", "--CardPer2TextAlign", "--CardPer3TextAlign", "--CardOption1ZagolovokTextAlign", "--CardOption2ZagolovokTextAlign", "--CardOption3ZagolovokTextAlign", "--CardOption4ZagolovokTextAlign", "--CardOption1TextTextAlign", "--CardOption2TextTextAlign", "--CardOption3TextTextAlign", "--CardOption4TextTextAlign", "--CardMainTextTextAlign", "--CardDopTextTextAlign", "--CardDownTextTextAlign"];
    const paddingNames = ["--CardZagolovokTextPadding", "--CardPer1TextPadding", "--CardPer2TextPadding", "--CardPer3TextPadding", "--CardOption1ZagolovokTextPaddingR", "--CardOption2ZagolovokTextPaddingR", "--CardOption3ZagolovokTextPaddingR", "--CardOption4ZagolovokTextPaddingR", "--CardOption1TextTextPaddingR", "--CardOption2TextTextPaddingR", "--CardOption3TextTextPaddingR", "--CardOption4TextTextPaddingR", "--CardMainTextTextPaddingT", "--CardDopTextTextPaddingT", "--CardDownTextTextPadding", "--ListPaddingT", "--ListPaddingR", "--ListPaddingB", "--ListPaddingL", "--CardPaddingT", "--CardMainTextTextPaddingR", "--CardMainTextTextPaddingB", "--CardMainTextTextPaddingL", "--CardDopTextTextPaddingR", "--CardDopTextTextPaddingB", "--CardDopTextTextPaddingL", "--CardOption1ZagolovokTextPaddingL", "--CardOption2ZagolovokTextPaddingL", "--CardOption3ZagolovokTextPaddingL", "--CardOption4ZagolovokTextPaddingL", "--CardOption1TextTextPaddingL", "--CardOption2TextTextPaddingL", "--CardOption3TextTextPaddingL", "--CardOption4TextTextPaddingL", "--CardPaddingR", "--CardPaddingB", "--CardPaddingL"];
    const bordwrRadiusNames = ["--CardZagolovok┌", "--CardZagolovok┐", "--CardZagolovok┘", "--CardZagolovok└", "--CardOption1┌", "--CardOption1┐", "--CardOption1┘", "--CardOption1└", "--CardOption2┌", "--CardOption2┐", "--CardOption2┘", "--CardOption2└", "--CardOption3┌", "--CardOption3┐", "--CardOption3┘", "--CardOption3└", "--CardOption4┌", "--CardOption4┐", "--CardOption4┘", "--CardOption4└", "--CardAllText┌", "--CardAllText┐", "--CardAllText┘", "--CardAllText└"];
    const [blockColor, setBlockColor] = useState([false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, false, false, true, true, true, true, true]);
    const [blockSizePole, setBlockSizePole] = useState([false, false, true, true, false, false, false, false, false]);
    const [blockSizeText, setBlockSizeText] = useState([false, false, true, true, false, true, true, true, false, true, true, true, true, false, false, false, false, false, false, false, false, false, true, true, true, false]);
    const [blockPaddingText, setBlockPaddingText] = useState([false, false, true, true, false, true, true, true, true, true, true, true, false, true, true, false, true, true, true, false, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true]);
    const [blockAlignValue, setBlockAlignValue] = useState([false, false, true, true, false, true, true, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false]);
    const [blockBorderRadius, setBlockBorderRadius] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [sizePole, setSizesPole] = useState([18,15,15,15,80,2,15,297,210]);
    const [minMax, setMinMax] = useState([8, 12]);
    const [blockMinMax, setBlockMinMax] = useState(false);
    const [sizeText, setSizesText] = useState([14, 11, 11, 11, 10, 10, 10, 10, 11, 11, 11, 11, 14, 20, 5, 200, 5, 200, 264, 20, 264, 70, 70, 70, 70, 110]);
    const [paddingText, setPaddingText] = useState([2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 10, 10, 10, 10, 9, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9]);
    const [alignValue, setAlignValue] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1]);
    const [borderRadiusValue, setBorderRadiusValue] = useState([11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11]);
    const [kolvo, setKolvo] = useState([3,3]);
    const [targetTypeCardNumber, setTargetTypeCardNumber] = useState(0);
    const perepolnen: boolean[] = [];
    const [perepolnenText, setPerepolnenText] = useState('');
    const [startPerepolnen, setStartPerepolnen] = useState(0);
    const [isBack, setIsBack] = useState(false);
    const [lineCut, setLineCut] = useState(true);
    const [myNumbers, setMyNumbers] = useState([true, false, true, false]);
    const fontMas = ["BookerlyBold", "BookerlyBoldItalic", "BookerlyDisplayBoldItalic", "BookerlyDisplay", "BookerlyItalic", "BookerlyLightItalic", "BookerlyLight", "Bookerly", "EtnaFreeFont", "GogonoCocoaMochiCyrillic", "GULAGPavljenko", "HellasDustCyrillic", "MorningBreezeBold", "MorningBreezeItalic", "MorningBreezeLight", "MorningBreeze", "OldSoviet", "SquareMeal", "ZarubkaTypeRegular", "ZaychikRegular"];
    const [targetFont1, setTargetFont1] = useState(7);
    const [targetFont2, setTargetFont2] = useState(7);
    const [isCSVRedactor, setIsCSVRedactor] = useState(false);
    const [settingString, setSettingString] = useState("");
    const [rubahaCaseNumber, setRubahaCaseNumber] = useState(2);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(5);
    const [ramkaCaseNumber, setRamkaCaseNumber] = useState(2);
    const [targetRamkaNumber, setTargetRamkaNumber] = useState(1);
    const [needUpdate, setNeedUpdate] = useState(false);
    const setTarget = (a: number, b: boolean) => {
        const M = [];
        for (let i = 0; i < targetOption.length; i++) M[i] = false;
        M[a] = b;
        setTargetOptions(M);
    };
    useEffect(() => {
        let r = '';
        for (let i = 0; i < colors.length; i++) r = r + colors[i] + ',';
        for (let i = 0; i < sizePole.length; i++) r = r + sizePole[i] + ',';
        for (let i = 0; i < minMax.length; i++) r = r + minMax[i] + ',';
        for (let i = 0; i < sizeText.length; i++) r = r + sizeText[i] + ',';
        for (let i = 0; i < paddingText.length; i++) r = r + paddingText[i] + ',';
        for (let i = 0; i < alignValue.length; i++) r = r + alignValue[i] + ',';
        for (let i = 0; i < borderRadiusValue.length; i++) r = r + borderRadiusValue[i] + ',';
        r = r + kolvo[0] + ',' + kolvo[1] + ',';
        r = r + targetBackgroundNumber + ',';
        r = r + targetTypeCardNumber + ',';
        r = r + targetRamkaNumber + ',';
        for (let i = 0; i < myNumbers.length; i++) r = r + myNumbers[i] + ',';
        r = r + targetFont1 + ',';
        r = r + targetFont2 + ',';
        r = r + lineCut + ',';
        setSettingString(r);
    }, [lineCut, colors, sizePole, minMax, sizeText, paddingText, alignValue, borderRadiusValue, kolvo, targetBackgroundNumber, targetTypeCardNumber, myNumbers, targetFont1, targetFont2]);
    useEffect(() => {
        let Car :string[] = [];
        getCardFromCSVLine(newCSV, Car, 0, newCSV.length - 1, '');
        setNewCard(Car);
    }, [newCSV]);
    const setOpenThisBaseCas = (a: number) => {
        const M = [...openThisBaseCase];
        M[a] = !M[a];
        setOpenThisBaseCase(M);
    };
    const setOpenThisBas = ( level: number, numbers: number[], name: string) => {
        type sp = {
            0: string[],
        };
        const spells: sp = {
            0: [],
        };
        let A = '';
        if (numbers.length != 0) {
            A = spells[level as keyof sp][0];
            for (let i = 0; i < numbers.length - 1; i++) {
                A = A + '\n' + spells[level as keyof sp][numbers[i]];
            }
        }
        setCSV(A.replaceAll('#####', name));
        setMakeCSV(makeCSV + 1);
    };
    const plusPerepolnen = (num: number, bool: boolean) => {
        if(num == -1) perepolnen[0] = bool;
        else perepolnen[num + 1] = bool;
    }
    const setPoles = (text: string[]) => {
        let R = '';
        for (let i = 0; i < 18; i++) R = R + '\"' + text[i]?.replaceAll('\"', '\"\"')?.replaceAll('\n', 'Џ') + '\"' + ';';
        setNewCSV(R);
        setNewCard(text);
    }
    const readFile = () => {
        const q = (document.getElementById("InputFile") as HTMLInputElement).files;
        if (q != null) {
            let reader = new FileReader();
            reader.readAsText(q[0], 'windows-1251');
            reader.onload = function () {
                let r = reader.result;
                if (r) setCSV(r as string);
                setMakeCSV(makeCSV + 1);
            };
            (document.getElementById("InputFile") as HTMLInputElement).value = "";
        };
    };
    useEffect(() => {
        makeCardsFromCSV();
    }, [makeCSV]);
    useEffect(()=> {
        setNeedUpdate(true);
    },[CSV]);
    useEffect(() => {
        let flag = true;
        if (perepolnen.length != 0)
        {
            let perText = "";
            for (let i = 0; i < perepolnen.length; i++)
                if (perepolnen[i]) {
                    if (flag) { 
                        flag = false;
                        perText = "Переполнение в: ";
                    }
                    perText = perText + '\n' + (i == 0 ? 'Тестовой карточке' : cards[i - 1][0]);
                }
            setPerepolnenText(perText);
        }
    }, [perepolnen]);
    const downloadFile = () => {
        let blob = new Blob(["\ufeff", CSV], { type: "text/csv;charset=windows-1251" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = "CSV-File.csv";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };
    const getCardFromCSVLine = (CSV: string, C: string[], pointStart: number, pointEnd: number, newCSV: string) => {
        for (let i = 0; pointStart<pointEnd || i<18; i++) {
            C[i] = '';
            if (pointEnd <= pointStart) {
                C[i] = '';
            } else if (CSV[pointStart] == '\"') {
                pointStart++;
                let nextK = CSV.indexOf('\"', pointStart);
                while (CSV[nextK + 1] == '\"' && nextK <= pointEnd && nextK != -1) {
                    C[i] = C[i] + CSV.slice(pointStart, nextK+1);
                    pointStart = nextK + 2;
                    nextK = CSV.indexOf('\"', nextK + 2);
                }
                if (nextK > pointEnd || nextK == -1) {
                    C[i] = C[i] + CSV.slice(pointStart, pointEnd);
                    pointStart = pointEnd+1;
                } else {
                    C[i] = C[i] + CSV.slice(pointStart, nextK);
                    pointStart = nextK + 1;
                    const FirstTZ = CSV.indexOf(';', pointStart);
                    if (FirstTZ <= pointEnd && FirstTZ !=-1) {
                        pointStart = FirstTZ + 1;
                    } else {
                        pointStart = pointEnd;
                    }
                }
            } else {
                const FirstTZ = CSV.indexOf(';', pointStart);
                if (FirstTZ <= pointEnd && FirstTZ !=-1) {
                    C[i] = CSV.slice(pointStart, FirstTZ);
                    pointStart = FirstTZ + 1;
                } else {
                    C[i] = CSV.slice(pointStart, pointEnd+1);
                    pointStart = pointEnd;
                }
            }
            C[i] = C[i].replaceAll('\r', '');
            newCSV = newCSV + '\"' + C[i].replaceAll('\"', '\"\"') + '\"' + ';';
            C[i] = C[i].replaceAll('Џ', '\n');
        }
        return newCSV;
    };
    const setNU = () => {
        setTimeout(() => {
            setNeedUpdate(false);
        }, 300);
    };
    const makeCardsFromCSV = () => {
        let nowPoint = 0, nextEnter = 0, endPoint = CSV.length - 1;
        let cardNumber = 0, newCSV= '';
        const C: string[][] = [];
        while ((nextEnter = CSV.indexOf('\n', nowPoint)) != -1) {
            C[cardNumber] = [];
            newCSV = getCardFromCSVLine(CSV,C[cardNumber], nowPoint, nextEnter - 1, newCSV) + '\n';
            nowPoint = nextEnter + 1;
            cardNumber++;
        };
        C[cardNumber] = [];
        newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, CSV.length - 1, newCSV);
        if (document.getElementById('CTRLV') as HTMLInputElement != undefined) (document.getElementById('CTRLV') as HTMLInputElement).value = String (cardNumber);
        setCards(C);
        setCSV(newCSV);
        setNU();
    }
    const getBackCardImg = (PoleStr: string) => {
        let A = Number(PoleStr); 
        if (A == undefined || A == 0 || A > 50 || Number.isNaN(A)) {
            A = targetBackgroundNumber;
        }
        if (A < 0 && A > -13) {
            const r = pyt[0 - A - 1];
            return (
                <img src={r!=undefined ? URL.createObjectURL(r) : undefined} alt="" />
            );
        }
        switch (A) {
            default:
                return (<div></div>);
        }
    }
    const getRamkaImg = (PoleStr: string) => {
        let A = Number(PoleStr); 
        if (A == undefined || A == 0 || A > 8 || Number.isNaN(A)) {
            A = targetRamkaNumber;
        }
        if (A < 0 && A > -13) {
            const r = pytRamka[0 - A - 1];
            return (
                <img src={r!=undefined ? URL.createObjectURL(r) : undefined} alt="" />
            );
        }
        switch (A) {
            default:
                return (<div></div>);
        }
    }
    const getCards = () => {
        let sumLists = [];
        for (let i = 0; i < cards.length; i += kolvo[1] * kolvo[0]) sumLists[i / (kolvo[1] * kolvo[0])] = i;
        return (
            <>
                {/* {
                    sumLists.map((a, index) => {
                    return (
                        <div className={style.List + ' ' + (isBack? style.BackList : null)} key={"List" + index}>
                            {
                                Array.from(Array(kolvo[0]).keys()).map((a, index2) => {
                                    return (
                                        <div className={style.LineCards} key={"List" + index +" Line" + index2}>
                                        {
                                            Array.from(Array(kolvo[1]).keys()).map((a, index3) => {
                                                if (isBack) {
                                                    console.log(index3,cards.length,kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3);
                                                    if (cards.length >= kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3) {
                                                        return (
                                                            <div className={style.Card} key={index*kolvo[1]*kolvo[0] + index2*kolvo[1] + kolvo[1] - index3} >
                                                                <CardSpell targetFont={String(fontMas[targetFont2])} NumbersExist={myNumbers} isBack={true} keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3} cardType={targetTypeCardNumber} Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 -1]}>
                                                                    {getBackCardImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1][16])}
                                                                    {getRamkaImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1][17])}
                                                                </CardSpell>
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className={style.Card } key={index*kolvo[1]*kolvo[0] + index2*kolvo[1] + kolvo[1] - index3} >
                                                        </div>
                                                    );
                                                } else {
                                                    console.log(cards.length,kolvo[1] * index2, index3);
                                                    if(cards.length > kolvo[1]*kolvo[0] * index + kolvo[1] * index2 + index3) {
                                                        return (
                                                            <div className={style.Card} key={index*kolvo[1]*kolvo[0] + index2*kolvo[1] + index3} >
                                                                <CardSpell targetFont={String(fontMas[targetFont1])} startPerepolnen={startPerepolnen} keyt={index*kolvo[1]*kolvo[0] + index2*kolvo[1] + index3} plusPerepolnen = {plusPerepolnen} minMax = {minMax} cardType={targetTypeCardNumber} Pole={cards[kolvo[1]*kolvo[0] * index + kolvo[1] * index2 + index3]} />
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className={style.Card} key={index*kolvo[1]*kolvo[0] + index2*kolvo[1] + index3} >
                                                        </div>
                                                    );
                                                }
                                            })
                                        }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                    })
                } */}
            </>
        );
    }
    const setPyti = (num: number) => {
        return (
            <div className={style.InputFile}>
                {/* <label htmlFor={`inputfile + ${0 - num -1}`}><Download/></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pyt;
                        T[0 - num -1] = R[0];
                        setPyt(T);
                    }
                    let r = targetBackgroundNumber; 
                    setTargetBackgroundNumber(-999999);
                    setTimeout(( a) => {
                        setTargetBackgroundNumber(a);
                    }, 300 , r);
                    //<img src={URL.createObjectURL(pyt)}
                }} /> */}
            </div>
        );
    }
    const getRubahaCase = () => {
        // const Elements = [1
        //     <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -12} setTarget={setTargetBackgroundNumber} number={-12} img={pyt[11] != undefined ? URL.createObjectURL(pyt[11]) : undefined}><div>{setPyti(-12)}</div></OptionCardImg>,
        //     <OptionCardImg name={"Роза"} targetThis={targetBackgroundNumber == 50} setTarget={setTargetBackgroundNumber} number={50} >{getBackCardImg('50')}</OptionCardImg>,
        // ];
        return (
            <div>
                {/* <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6]}
                    {Elements[rubahaCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 2]}
                    {Elements[rubahaCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 4]}
                    {Elements[rubahaCaseNumber * 6 + 5]}
                </div> */}
            </div>
        );
    };
    const setPytiRamka = (num: number) => {
        return (
            <div className={style.InputFile}>
                {/* <label htmlFor={`inputfileR + ${0 - num -1}`}><Download/></label>
                <input type="file" name="" id={`inputfileR + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pytRamka;
                        T[0 - num -1] = R[0];
                        setPytRamka(T);
                    }
                    let r = targetBackgroundNumber; 
                    setTargetRamkaNumber(-999999);
                    setTimeout(( a) => {
                        setTargetRamkaNumber(a);
                    }, 300 , r);
                }} /> */}
            </div>
        );
    }
    const getRamkaCase = () => {
        // const Elements = [
        //     <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -12} setTarget={setTargetRamkaNumber} number={-12} img={pytRamka[11] != undefined ? URL.createObjectURL(pytRamka[11]) : undefined}><div>{setPytiRamka(-12)}</div></OptionCardImg>,
        //     <OptionCardImg name={"Цветы"} targetThis={targetRamkaNumber == 7} setTarget={setTargetRamkaNumber} number={7} >{getRamkaImg('7')}</OptionCardImg>,
        // ];
        return (
            <div>
                {/* <div className={style.LineSetting}>
                    {Elements[ramkaCaseNumber * 6]}
                    {Elements[ramkaCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[ramkaCaseNumber * 6 + 2]}
                    {Elements[ramkaCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[ramkaCaseNumber * 6 + 4]}
                    {Elements[ramkaCaseNumber * 6 + 5]}
                </div> */}
            </div>
        );
    };
    return (
        <div className={style.Main} id={"ThisIsColorsConst"}>
            <div className={style.Viu + ' ' + (showOptions ? style.OpenOptionViu : '')}>
                <div className={style.ChangeCardViu + ' ' + style.BigViu}>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? '' : style.OnHover)} onClick={() => { setIsCSVRedactor(false); setNewCSV(newConst);}}>
                        <p>Режим печати</p>
                    </div>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? style.OnHover : '')} onClick={() => {setIsCSVRedactor(true)}}>
                        <p>Режим CSV редактора</p>
                    </div>
                </div>
                {
                    !isCSVRedactor
                        ? <div className={style.ChangeCardViu}>
                            <div className={style.RubahaViu + ' ' + (isBack ? '' : style.OnHover)} onClick={() => { setIsBack(false) }}>
                                <p>Лицо</p>
                            </div>
                            <div className={style.RubahaViu + ' ' + (isBack ? style.OnHover : '')} onClick={() => { setIsBack(true) }}>
                                <p>Рубаха</p>
                            </div>
                        </div>
                        : null
                }
            </div>
            <Setting className={style.OptionsSetting} onClick={() => {setShowOptions(true);}}/>
            <div className={style.Options + ' ' + (showOptions ? '' : style.HideWindow)}>
                <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowOptions(false); }}>Скрыть</div> </div>
                <div className={style.OpionsCase}>
                </div>
            </div>
            {!showRedactor
                ? <Setting className={style.RedactorSetting} onClick={() => { setShowRedactor(true); }} />
                : null}
            <div className={style.RedactorAll+ ' ' + (showOptions ? '' : style.BigWidth)}>
                {isCSVRedactor
                    ? <div className={style.CSVLine}>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>Текущая строка</div>
                            <div className={style.CSVText}>
                                <input type="text" name="" id="" value={newCSV} onChange={(e) => { setNewCSV(e.target.value); }}/>
                            </div>
                            <div className={style.Buttons}>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let R = '';
                                        const A: string[] = [...cards[Number((document.getElementById('CTRLC') as HTMLInputElement)?.value)]];
                                        for (let i = 0; i < 18; i++) R = R + '\"' + A[i].replaceAll('\"', '\"\"').replaceAll('\n', 'Џ') + '\"' + ';';
                                        R = getCardFromCSVLine(R, A, 0, R.length - 1, '');
                                        setNewCSV(R);
                                        setNewCard(A);
                                    }}>
                                        Вставить сюда карточку №
                                    </div>
                                    <input min={0} max={cards.length - 1} type="number" name="" id="CTRLC" defaultValue={0} /></div>
                                <div className={style.Download} onClick={() => {setNewCSV(newConst);}}>Очистить карточку</div>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let num = Number((document.getElementById('CTRLV') as HTMLInputElement)?.value);
                                        let afterNum = 0;
                                        while (num >= 0) {
                                            afterNum = CSV.indexOf('\n', afterNum + 1);
                                            num--;
                                        }
                                        if (afterNum == -1) setCSV(CSV + '\n' + newCSV);
                                        else if (afterNum == 0) setCSV(newCSV + '\n' + CSV);
                                        else {
                                            afterNum++;
                                            setCSV(CSV.slice(0, afterNum) + newCSV + '\n' + CSV.slice(afterNum, CSV.length));
                                        }
                                        setMakeCSV(makeCSV + 1);
                                        (document.getElementById('CTRLV') as HTMLInputElement).value = String (cards.length);
                                    }}>Вставить новую карточку после карточки №</div>
                                    <input type="number" min={-1} max={cards.length - 1} name="" id={'CTRLV'}  defaultValue={cards.length - 1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className={style.Redactor  + ' ' + (showRedactor ? '' : style.HideWindow)}>
                    <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowRedactor(false); }}>Скрыть</div> </div>
                    <div className={style.RedactorCase}>
                        <div className={style.Base}>
                            <div className={style.Title}>База</div>
                            <div className={style.BaseTips}>
                            </div>
                        </div>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>CSV</div>
                            <div className={style.CSVText}>
                                <textarea value={CSV} name="CSVText" id="CSVText" wrap='off' onChange={(e) => { setCSV(e.target.value); }} />
                            </div>
                        <div className={style.Buttons}>
                            <input className={style.DownloadInput} type="file" id="InputFile" onChange={readFile}/>
                            <label className={style.Download} htmlFor="InputFile">Загрузить файл</label>
                            <div className={style.Obnova}>
                                    <div className={style.Download} onClick={() => { setMakeCSV(makeCSV + 1) }}>Обновить карточки</div>
                                    {needUpdate ? <div className={style.NeedUpdate}>!</div> : null}
                            </div>
                            <div className={style.Download} onClick={downloadFile}>Скачать файл</div>
                        </div>
                        </div>
                    </div>
            </div>
            </div>
            {
                !isCSVRedactor
                    ? <div className={style.Lists + ' ' + (showRedactor ? style.ListDown : '') + ' ' + (showOptions ? style.ListRigth : '')}> {getCards()} </div>
                    : <div className={style.AroundTwoCards}>
                        <div className={style.TwoCards}>
                            <div className={style.OneCard}><CardItem targetFont={String(fontMas[targetFont1])} startPerepolnen={startPerepolnen} keyt={-1} plusPerepolnen={plusPerepolnen} minMax={minMax} cardType={targetTypeCardNumber} Pole={newCard} setPole={setPoles}/></div>
                            <div className={style.OneCard}><CardItem targetFont={String(fontMas[targetFont2])} NumbersExist={myNumbers} isBack={true} keyt={-1} cardType={targetTypeCardNumber} Pole={newCard} setPole={setPoles}>{getBackCardImg(newCard[16])}{getRamkaImg(newCard[17])}</CardItem></div>
                            <div className={style.CardSelection}>
                                <div>
                                    <input placeholder='Заголовок' type="text" value={newCard[0]} onChange={(e) => { const A = newCard; A[0] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Школа-уровень' type="text" value={newCard[1]} onChange={(e) => { const A = newCard; A[1] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Опция 1' type="text" value={newCard[2]} onChange={(e) => { const A = newCard; A[2] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Текст опции 1' type="text" value={newCard[3]} onChange={(e) => { const A = newCard; A[3] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Опция 2' type="text" value={newCard[4]} onChange={(e) => { const A = newCard; A[4] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Текст опции 2' type="text" value={newCard[5]} onChange={(e) => { const A = newCard; A[5] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Опция 3' type="text" value={newCard[6]} onChange={(e) => { const A = newCard; A[6] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Текст опции 3' type="text" value={newCard[7]} onChange={(e) => { const A = newCard; A[7] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Опция 4' type="text" value={newCard[8]} onChange={(e) => { const A = newCard; A[8] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Текст опции 4' type="text" value={newCard[9]} onChange={(e) => { const A = newCard; A[9] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='///' type="text" value={newCard[10]} onChange={(e) => { const A = newCard; A[10] = e.target.value;  setPoles(A)}} />
                                    <textarea placeholder='Главный текст' rows={6} value={newCard[11]} onChange={(e) => { const A = newCard; A[11] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='На более высоком уровне' type="text" value={newCard[12]} onChange={(e) => { const A = newCard; A[12] = e.target.value;  setPoles(A)}} />
                                    <textarea placeholder='Доп текст' rows={6} value={newCard[13]} onChange={(e) => { const A = newCard; A[13] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Подпись' type="text" value={newCard[14]} onChange={(e) => { const A = newCard; A[14] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Номер на рубахе' type="text" value={newCard[15]} onChange={(e) => { const A = newCard; A[15] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Номер рубахи' type="text" value={newCard[16]} onChange={(e) => { const A = newCard; A[16] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Номер рамки' type="text" value={newCard[17]} onChange={(e) => { const A = newCard; A[17] = e.target.value;  setPoles(A)}} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
export default SpellMain;