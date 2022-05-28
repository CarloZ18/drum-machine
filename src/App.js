import Pad from "./Components/Drum/Pad";
import { DrumStyle } from "./styles/stylesDrum";
import Controls from "./Components/Drum/Controls";
import {useEffect, useRef,useState } from "react";
import { bankOne } from "./data/dataBase";

function App() {
  //CONTROLS COMPONENT
const [power,setPower]=useState(true);
const displayRef = useRef();

  const powerControl=()=>{
power?setPower(false):setPower(true);
displayRef.current.innerText = "";
  }

  const handleVolume = (e) => {
    identificadorAudio.current[0].volume = e.target.value;
    console.log(refsAudio)
  }


  //PAD COMPONENT
  const identificadorAudio = useRef([]);
  identificadorAudio.current = [];

  const identificadorButton = useRef([]);
  identificadorButton.current = [];

  const refsAudio = (el) => {
    if (el && !identificadorAudio.current.includes(el)) {
      identificadorAudio.current.push(el);
    }
  };

  const refsButton = (el) => {
    if (el && !identificadorButton.current.includes(el)) {
      identificadorButton.current.push(el);
    }
  };

  const activatePad = (buttonIndex) => {
    if (buttonIndex.style.backgroundColor === "") {
      buttonIndex.style.backgroundColor = "#0c86d8";
      buttonIndex.style.color = "#fff";
    } else {
      buttonIndex.style.backgroundColor = "";
      buttonIndex.style.color = "#000";
    }
  };

  const playSound = (audioIndex, buttonIndex) => {
if(power === true){
    displayRef.current.innerText = buttonIndex.id;
    const audioTag = audioIndex;
    audioTag.currentTime = 0;
    audioTag.play();
    activatePad(buttonIndex);
    setTimeout(() => activatePad(buttonIndex), 100);
}
    
  };

  const handleKeyPress = (e) => {
    let numKey = e.keyCode;
    const idAudio = identificadorAudio.current;
    const idButton = identificadorButton.current;
    switch (numKey) {
      case 81:
        playSound(idAudio[0], idButton[0]);
        break;
      case 87:
        playSound(idAudio[1], idButton[1]);
        break;
      case 69:
        playSound(idAudio[2], idButton[2]);
        break;
      case 65:
        playSound(idAudio[3], idButton[3]);
        break;
      case 83:
        playSound(idAudio[4], idButton[4]);
        break;
      case 68:
        playSound(idAudio[5], idButton[5]);
        break;
      case 90:
        playSound(idAudio[6], idButton[6]);
        break;
      case 88:
        playSound(idAudio[7], idButton[7]);
        break;
      case 67:
        playSound(idAudio[8], idButton[8]);
        break;
      default:
    }
    console.log(numKey);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
document.addEventListener("change", handleVolume);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };

    
  });

  const mapBankOne = bankOne.map((bankOne, indexBank) => (
    <button
      className="drum-pad"
      id={bankOne.id}
      ref={refsButton}
      onClick={() =>
        playSound(
          identificadorAudio.current[indexBank],
          identificadorButton.current[indexBank]
        )
      }
    >
      {bankOne.keyTrigger}
      <audio
        src={bankOne.url}
        className="clip"
        ref={refsAudio}
        id={bankOne.keyTrigger}
      />
    </button>
  ));

  return (
    <DrumStyle id="drum-machine">
      <Pad mapBankOne={mapBankOne} />
      <Controls displayRef={displayRef} powerControl={powerControl} handleVolume={handleVolume} />
    </DrumStyle>
  );
}

export default App;
