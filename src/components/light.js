import React, { useState, useEffect } from 'react';

let walkLight = 'walkLight text-center d-flex align-items-center justify-content-center';
let stopLight = 'stopLight text-center d-flex align-items-center justify-content-center';
let offWalking = 'walkLightOff text-center d-flex align-items-center justify-content-center';

const Light = () => {

    const [time, setTime] = useState(0);
    const [system, setSystem] = useState(0);
    const [red, setRed] = useState('redOff mx-auto');
    const [yellow, setYellow] = useState('yellowOff mx-auto');
    const [green, setGreen] = useState('greenOff mx-auto');
    const [btnON, setBtnON] = useState('system mx-auto text-center');
    const [btnOFF, setBtnOFF] = useState('system mx-auto text-center');
    const [btnAUTO, setBtnAUTO] = useState('system mx-auto text-center');
    const [walking, setWalking] = useState(offWalking);

    let timer = () => {
        setTimeout(() => {
            setTime(time + 1);
        },1000) 
    }
    
    useEffect(() => {
        if (system === 2) timer();
        if (time === 0 && system === 2) { setRed('red mx-auto'); setYellow('yellowOff mx-auto'); setGreen('greenOff mx-auto'); setWalking(walkLight); }
        if (time === 3 && system === 2) { setRed('redOff mx-auto'); setYellow('yellowOff mx-auto'); setGreen('green mx-auto'); setWalking(stopLight); }
        if (time === 6 && system === 2) { setRed('redOff mx-auto'); setYellow('yellow mx-auto'); setGreen('greenOff mx-auto'); setWalking(stopLight); }
        if (time === 9 && system === 2) setTime(0);
    }, [time, system])

    const systemLight = (e) => {
        let sys = e.target.id;
        if (sys === 'on') on();
        if (sys === 'off') off();
        if (sys === 'auto') {auto() };
    }
    
    const clickLight = (e) => {
        let clicked = e.target.id;
        if (clicked === 'red' && system === 1) {setRed('red mx-auto'); setYellow('yellowOff mx-auto'); setGreen('greenOff mx-auto'); setWalking(walkLight) };
        if (clicked === 'yellow' && system === 1) {setRed('redOff mx-auto'); setYellow('yellow mx-auto'); setGreen('greenOff mx-auto'); setWalking(walkLight) };
        if (clicked === 'green' && system === 1) {setRed('redOff mx-auto'); setYellow('yellowOff mx-auto'); setGreen('green mx-auto'); setWalking(stopLight) };
        console.log(clicked);
    } 

    const on = () => {
        setSystem(1);
        setRed('red mx-auto');
        setBtnON('systemOn mx-auto text-center');
        setBtnOFF('system mx-auto text-center');
        setBtnAUTO('system mx-auto text-center')
    }
    const off = () => {
        setSystem(0);
        setRed('redOff mx-auto');
        setYellow('yellowOff mx-auto');
        setGreen('greenOff mx-auto');
        setBtnON('system mx-auto text-center');
        setBtnOFF('systemOn mx-auto text-center');
        setBtnAUTO('system mx-auto text-center');
    }
    const auto = () => {
        setSystem(2);
        setBtnON('system mx-auto text-center');
        setBtnOFF('system mx-auto text-center');
        setBtnAUTO('systemOn mx-auto text-center'); 
    }

    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="mainLight">
                    <div id="red" onClick={clickLight} className={red}></div>
                    <div id="yellow" onClick={clickLight} className={yellow}></div>
                    <div id="green" onClick={clickLight} className={green}></div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className='stickLight'></div>
                <div className={walking}>WALK</div>
            </div>
            <div className="autoBox">
                <div id="on" onClick={systemLight} className={btnON}>ON</div>
                <div id="off" onClick={systemLight} className={btnOFF}>OFF</div>
                <div id="auto" onClick={systemLight} className={btnAUTO}>AUTO</div>
            </div>
        </div>
        </>
    );
};

export default Light;