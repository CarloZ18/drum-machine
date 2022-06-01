import Pad from "./Components/Drum/Pad";
import { DrumStyle } from "./Components/ui/stylesDrum";
import Controls from "./Components/Drum/Controls";
import { useEffect, useRef } from "react";
import { bankOne} from "./data/dataBase";
import { connect, useDispatch } from "react-redux";
import { store } from "./store/store";
import { bank1, bank2, powerOn, powerOff } from "./store/amount/actions";

function App() {
  const dispatch = useDispatch();
  const state = store.getState();

  console.log(state.power);

  //CONTROLS COMPONENT

  const displayRef = useRef();

  //POWER ON OR POWER OFF
  const powerControl = () => {
    if (state.power === true) {
      dispatch(powerOff());
      displayRef.current.innerText = "";
    } else {
      dispatch(powerOn());
    }
  };

  //CHANGE VOLUME
  const handleVolume = (e) => {
    identificadorAudio.current.forEach((audio) => {
      audio.volume = e.target.value;
    });
  };

  //CHANGE BANK
  const bankControl = () => {
    if (state.bank === bankOne) {
      dispatch(bank2());
    } else {
      dispatch(bank1());
    }
  };

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
    if (state.power === true) {
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
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const mapBank = state.bank.map((bank, indexBank) => (
    <button
      className="drum-pad"
      id={bank.id}
      ref={refsButton}
      onClick={() =>
        playSound(
          identificadorAudio.current[indexBank],
          identificadorButton.current[indexBank]
        )
      }
    >
      {bank.keyTrigger}
      <audio
        src={bank.url}
        className="clip"
        ref={refsAudio}
        id={bank.keyTrigger}
      />
    </button>
  ));

  return (
    <DrumStyle id="drum-machine">
      <Pad mapBank={mapBank} />
      <Controls
        displayRef={displayRef}
        powerControl={powerControl}
        bankControl={bankControl}
        handleVolume={handleVolume}
      />
    </DrumStyle>
  );
}


const mapStateToProps = (state) => {
  return {
    bank: state.bank,
    power: state.power,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bank1: () => {
      dispatch(bank1());
    },
    bank2: () => {
      dispatch(bank2());
    },
    powerOn: () => {
      dispatch(powerOn());
    },
    powerOff: () => {
      dispatch(powerOff());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
