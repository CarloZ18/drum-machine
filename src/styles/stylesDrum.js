import styled from 'styled-components';

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

export {DrumStyle}