import { useEffect, useRef } from "react";
import { bankOne } from "../../data/dataBase";

function Pad() {
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
      buttonIndex.style.color = "white";
    } else {
      buttonIndex.style.backgroundColor = "";
      buttonIndex.style.color = "black";
    }
  };

  const playSound = (audioIndex, buttonIndex) => {
    const audioTag = audioIndex;
    audioTag.currentTime = 0;
    audioTag.play();
    activatePad(buttonIndex);
    setTimeout(() => activatePad(buttonIndex), 100);
  };

  const handleKeyPress = (e) => {
    let numKey = e.keyCode;
    switch (numKey) {
      case 81:
      case 87:
      case 69:
      case 65:
      case 83:
      case 68:
      case 90:
      case 88:
      case 67:
       
        break;
      default:
    }
    console.log(e.keyCode);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress());

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
    <>
      <div id="keys">{mapBankOne}</div>
    </>
  );
}

export default Pad;
