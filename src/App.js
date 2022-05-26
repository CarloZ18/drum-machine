import Pad from "./Components/Drum/Pad";
import { DrumStyle } from "./styles/stylesDrum";
import Controls from "./Components/Drum/Controls";

function App() {
 

  return (
    <DrumStyle id="drum-machine">
      <Pad />
      <Controls />
    </DrumStyle>
  );
}

export default App;
