import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicCard({isLoggedIn, setIsLoggedIn}) {

    const handleChange = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    
  return (
    <div>
        This is the login page
    </div>
  );
}