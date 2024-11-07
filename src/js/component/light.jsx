import React, {useState} from "react";


export const Light = () => {
    const [color, setColor] = useState('');
    const [isPurpleOn, setIsPurpleOn] = useState(false);
    const togglePurpleLight = () => {
        setIsPurpleOn(prevState => !prevState); // Cambia entre encendido y apagado
    };
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <div
                    className={`container__trafficLight red ${color === 'red' ? 'redGlow' : ''}`}
                    onClick={() => setColor('red')}
                >
                </div>

                <div
                    className={`container__trafficLight yellow ${color === 'yellow' ? 'yellowGlow' : ''}`}
                    onClick={() => setColor('yellow')}
                >
                </div>

                <div
                    className={`container__trafficLight green ${color === 'green' ? 'greenGlow' : ''}`}
                    onClick={() => setColor('green')}
                >
                </div>
                
            </div>
        </>
       
    );
};