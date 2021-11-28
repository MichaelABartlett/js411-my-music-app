import {useState} from 'react';
import './Loggedin.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicCard({state, setState}) {

    const handleChange = () => {
        setState(!state)
    }
    
  return (
    <div className="container">

      <div className="loginBox">
        <div><TextField id="standard-basic" label="Username" variant="standard" style={{width:300}} /></div>
        <div><TextField id="standard-basic" label="Password" variant="standard" style={{width:300}} /></div>
        <div><Button variant="contained" style={{width:300}} onClick={handleChange} >LOGIN</Button></div>
      </div>
    </div>
  );
}


{/* <div><Button variant="contained" style={{width:195}}>LOGIN</Button></div> */}