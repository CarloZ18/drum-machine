import {PowerButton,BankButton} from "../ui/switchButtons";

function Controls({ displayRef, powerControl,bankControl,handleVolume }) {
  return (
    <div className="operator">
      <div className="control1">
        <p className="power">Power</p>
       <PowerButton Control={powerControl} />
      </div>
      <p id="display" ref={displayRef}></p>
      <p className="volume">Volume</p>
      <div className="control2">
        <div className="volume-slider">
          <input
            className="volume"
            type="range"
            step="0.01"
            min="0"
            max="1"
            onChange={handleVolume}
            defaultValue="0.3"
          />
        </div>
      </div>
      <div className="control3">
        <p className="bank">Bank</p>
      <BankButton Control={bankControl} />
      </div>
    </div>
  );
}

export default Controls;
