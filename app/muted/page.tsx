"use client";
import { useState } from "react";
import ColorType from "../props/page";

export default function Home() {

  const [color, setColor] = useState('#a75051');

  function Red(){
    setColor('#a75051');
  }
  function Orange(){
    setColor('#b27d58');
  }
  function Yellow(){
    setColor('#b3af38');
  }
  function Green(){
    setColor('#589a5d');
  }
  function Blue(){
    setColor('#4781a7');
  }
  function Purple(){
    setColor('#746198');
  }

  return (
    <div>
      <ColorType colorType="Muted" />

      <div className="sections">
        <p className="litabox" style={{backgroundColor: color, color: 'black'}}>{color}</p>
          <div className="buttons">
            <button onClick={Red} style={{backgroundColor: '#a75051'}}>Red</button>
            <button onClick={Orange} style={{backgroundColor: '#b27d58'}}>Orange</button>
            <button onClick={Yellow} style={{backgroundColor: '#b3af38'}}>Yellow</button>
            <button onClick={Green} style={{backgroundColor: '#589a5d'}}>Green</button>
            <button onClick={Blue} style={{backgroundColor: '#4781a7'}}>Blue</button>
            <button onClick={Purple} style={{backgroundColor: '#746198'}}>Purple</button>
          </div>
      </div>
    </div>
  );
}
