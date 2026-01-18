"use client";
import { useState } from "react";
import ColorType from "./props/page";
// importum proppinu ColorType sem búið var til á annarri síðu

export default function Home() {

  const [color, setColor] = useState('Red');
  // color er breyta sem geymir gildið
  // setColor er notað til að uppfæra gildið
  // useState() er gildið sem við byrjum með áður en því hefur verið breytt

  function Red(){
    // þegar kallað er á fallið verður color breytunni breytt
    setColor('Red');
  }
  function Orange(){
    setColor('Orange');
  }
  function Yellow(){
    setColor('Yellow');
  }
  function Green(){
    setColor('Green');
  }
  function Blue(){
    setColor('Blue');
  }
  function Purple(){
    setColor('Purple');
  }

  return (
    <div>
      <ColorType colorType="Bold"/>

      <div className="sections">
        <p className="litabox" style={{backgroundColor: color, color: 'black'}}>{color}</p>
          <div className="buttons">
            <button onClick={Red} style={{backgroundColor: 'Red'}}>Red</button>
            <button onClick={Orange} style={{backgroundColor: 'Orange'}}>Orange</button>
            <button onClick={Yellow} style={{backgroundColor: 'Yellow'}}>Yellow</button>
            <button onClick={Green} style={{backgroundColor: 'Green'}}>Green</button>
            <button onClick={Blue} style={{backgroundColor: 'Blue'}}>Blue</button>
            <button onClick={Purple} style={{backgroundColor: 'Purple'}}>Purple</button>
          </div>
      </div>
    </div>
  );
}
