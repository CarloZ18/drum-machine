import { React} from "react";
function Controls (){
    return(
        <div className="operator">
        <div className="control1">
          <p className="power">Power</p>
          <div className="select">
            <div className="inner"></div>
          </div>
        </div>
        <p id="display"></p>
        <p className="volume">Volume</p>
        <div className="control2">
          <div className="volume-slider">
            <input
              className="volume"
              type="range"
              step="0.01"
              min="0"
              max="1"
              value="0.3"
            />
          </div>
        </div>
        <div className="control3">
          <p className="bank">Bank</p>
          <div className="select">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    );
}

export default Controls;