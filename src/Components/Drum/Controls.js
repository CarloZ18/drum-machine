function Controls({ displayRef, powerControl,handleVolume }) {
  return (
    <div className="operator">
      <div className="control1">
        <p className="power">Power</p>
        <div className="flipswitch">
          <input
          onClick={powerControl}
            type="checkbox"
            name="flipswitch"
            className="flipswitch-cb"
            id="fs"
          />
          <label className="flipswitch-label" htmlFor="fs">
            <div className="flipswitch-inner"></div>
            <div className="flipswitch-switch"></div>
          </label>
        </div>
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
        <div className="select">
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
