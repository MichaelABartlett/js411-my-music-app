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
        <Component {...label} checked={state} onChange={handleChange} />
      </CardActions>
    </Card>
  );
}


// this was working
// export default function BasicCard({isOnline, setIsOnline}) {

//     const handleChange = () => {
//         setIsOnline(!isOnline)
//     }
    
//   return (
//     <Card sx={{ maxWidth: 275 }}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           Online mode
//         </Typography>
//         <Typography variant="body2">
//           Is this application connected to the internet?
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Switch {...label} checked={isOnline} onChange={handleChange} />
//       </CardActions>
//     </Card>
//   );
// }