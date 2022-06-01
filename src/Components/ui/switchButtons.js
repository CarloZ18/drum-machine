
function PowerButton ({Control}){
    return (
        <div className="flipswitch">
        <input
        onClick={Control}
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

    )
}

function BankButton ({Control}){
  return (
      <div className="flipswitch2">
      <input
      onClick={Control}
        type="checkbox"
        name="flipswitch2"
        className="flipswitch-cb2"
        id="fs2"
      />
      <label className="flipswitch-label2" htmlFor="fs2">
        <div className="flipswitch-inner2"></div>
        <div className="flipswitch-switch2"></div>
      </label>
    </div>

  )
}

export {PowerButton,BankButton};