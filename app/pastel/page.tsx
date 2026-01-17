"use client";
import { useState } from "react";
import ColorType from "../props/page";

export default function Pastel(){
    const [color, setColor] = useState('#ffb3ba');

    function Red(){
        setColor('#ffbfba');
    }
    function Orange(){
        setColor('#ffdfba');
    }
    function Yellow(){
        setColor('#ffffba');
    }
    function Green(){
        setColor('#baffc9');
    }
    function Blue(){
        setColor('#bae1ff');
    }
    function Purple(){
        setColor('#eecbff');
    }

    return(
        <div>
            <ColorType colorType="Pastel"/>
            <div className="sections">
                <p className="litabox" style={{backgroundColor: color, color: 'black'}}>{color}</p>
                <div className="buttons">
                    <button onClick={Red} style={{backgroundColor: '#ffbfba', color: 'black'}}>Red</button>
                    <button onClick={Orange} style={{backgroundColor: '#ffdfba', color: 'black'}}>Orange</button>
                    <button onClick={Yellow} style={{backgroundColor: '#ffffba', color: 'black'}}>Yellow</button>
                    <button onClick={Green} style={{backgroundColor: '#baffc9', color: 'black'}}>Green</button>
                    <button onClick={Blue} style={{backgroundColor: '#bae1ff', color: 'black'}}>Blue</button>
                    <button onClick={Purple} style={{backgroundColor: '#eecbff', color: 'black'}}>Purple</button>
                </div>
            </div>
        </div>
    )
}