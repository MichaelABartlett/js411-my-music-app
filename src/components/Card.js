import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicCard({state, setState, title, body, component: Component}) {

    const handleChange = () => {
        setState(!state)
    }
    
  return (
    <Card sx={{ maxWidth: 250 }} >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Component {...label} checked={state} onChange={handleChange} />
      </CardActions>
    </Card>
  );
}

