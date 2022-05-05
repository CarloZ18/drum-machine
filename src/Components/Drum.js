import React from 'react';
import styled from 'styled-components';

/*const LayoutStyle=styled.div`
background-color:#C8BCA2;
box-shadow: 2px 2px 15px 1px #000000;
align-items:center;
margin-top:100px;
border-radius:50px;
`*/

const DrumStyle=styled.div`
display:grid;
grid-template-columns:1.5fr 1fr;
justify-items:center;
align-items:center;
margin-top:20%;
background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(160deg, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width:700px;
height:400px;
border-radius:50px;
box-shadow: 2px 2px 15px 1px #000000;
`

function DrumComponent(){   
    function playSound(){

    }
return(
<DrumStyle id="drum-machine" className='container'>
    <div id='keys'>
        <button className='drum-pad' id='Heater-1' onClick={playSound} >
        <strong>Q</strong>
                <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'>
                </audio>    
        </button>

        <button className='drum-pad' id='Heater-2'>
            <strong>W</strong>
                <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'>
                </audio>  
        </button>
        <button className='drum-pad' id='Heater-3'>
            <strong>E</strong>
                <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'>
                </audio>  
        </button>

        <button className='drum-pad' id='Heater-4'>
            <strong>A</strong>
                <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'>
                </audio>  
        </button>
        <button className='drum-pad' id='Clap' >
            <strong>S</strong>
                <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'>
                </audio>  
        </button>
        <button className='drum-pad' id='Open-HH'>
            <strong>D</strong>
                <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'>
                </audio>  
        </button>

        
        <button className='drum-pad' id='Kick-n-Hat'>
            <strong>Z</strong>
                <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'>
                </audio>  
        </button>
        <button className='drum-pad' id='Kick'>
            <strong>X</strong>
                <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'>
                </audio>  
        </button>
        <button className='drum-pad' id='Closed-HH'>
            <strong>C</strong>
                <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'>
                </audio>  
        </button>
    </div>
   

    <div className='operator'>
        <div className='control1'>
             <p className='power'>Power</p> 
             <div className='select'>
                 <div className='inner'>
                 </div>
             </div>
        </div>
        <p id='display'></p>

         <p className='volume'>Volume</p> 
        <div className='control2'>
            <div className='volume-slider'>
                <input className='volume' type='range' step='0.01' min='0' max='1' value='0.3'/>   
            </div>
        </div>
        <div className='control3'>
             <p className='bank'>Bank</p> 
             <div className='select'>
                 <div className='inner'>
                 </div>
             </div>
        </div>
         
    </div>

</DrumStyle>
 
)
}

export default DrumComponent