import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Slider from '@mui/material/Slider';


export default function BasicCard({state, setState, title, body, component: Component}) {

    function valuetext(value) {
        return `${value}`;
      }
    
    const getValue = (e, val) => {
        console.log('value: ', val)
            setState(state = val)
    }

    
    
    
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2">
            {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={getValue}
       />
      </CardActions>
    </Card>
  );
}
