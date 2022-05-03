import React from 'react';
import styled from 'styled-components';

const LayoutStyle=styled.div`
background-color:beige;
`

const DrumStyle=styled.div`
background-color:white;
`
function LayoutComponent(){
    return(
        <LayoutStyle>
        <DrumComponent/>
        </LayoutStyle>
    )
    }

function DrumComponent(){
return(
<DrumStyle></DrumStyle>
 
)
}

export default LayoutComponent