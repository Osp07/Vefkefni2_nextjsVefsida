"use client";
import { useState } from "react";
import ColorType from "../props/page";

export default function Neon(){

    const [color, setColor] = useState('#ed0003');

    function Red(){
        setColor('#ed0003');
    }
    function Orange(){
        setColor('#ff8600');
    }
    function Yellow(){
        setColor('#fffe37');
    }
    function Green(){
        setColor('#01f301');
    }
    function Blue(){
        setColor('#3500ff');
    }
    function Purple(){
        setColor('#8c00fc');
    }

    return(
        <div>
            <ColorType colorType="Neon"/>
            <div className="sections">
                <p className="litabox" style={{backgroundColor: color, color: 'black'}}>{color}</p>
                <div className="buttons">
                    <button onClick={Red} style={{backgroundColor: '#ed0003'}}>Red</button>
                    <button onClick={Orange} style={{backgroundColor: '#ff8600'}}>Orange</button>
                    <button onClick={Yellow} style={{backgroundColor: '#fffe37'}}>Yellow</button>
                    <button onClick={Green} style={{backgroundColor: '#01f301'}}>Green</button>
                    <button onClick={Blue} style={{backgroundColor: '#3500ff'}}>Blue</button>
                    <button onClick={Purple} style={{backgroundColor: '#8c00fc'}}>Purple</button>
                </div>
            </div>
        </div>
    )
}