import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicCard({state, setState, title, body}) {

    const handleChange = (e, val) => {
      setState(state = val.props.value);
      console.log('value: ' , val.props.value)
    };
    
    
  return (
    <Card sx={{ maxWidth: 250 }}  >
      <CardContent>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2">
            {body}
        </Typography>
      </CardContent>
      <CardActions>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={state}
          onChange={handleChange}
        >
          <MenuItem value=''>
           
          </MenuItem>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      </CardActions>
    </Card>
  );
}
