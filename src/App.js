import {useState} from 'react';
//import Button from './components/Button'
import Card from './components/Card'
import Loggedin from './components/LoggedIn'
import "./App.css";

function App() {

  const [isOnline, setIsOnline] = useState(true)

  const [isVolume, setIsVolume] = useState(true)

  const [isSoundQuality, setIsSoundQuality] = useState(true)
 
  return (
    <div className="App">

      <div className="Cards">
        <Card title= "Online Mode" 
              body= "Is this application connected to the internet?"  
              state={isOnline} 
              setState={setIsOnline} 
              component={Switch}
               />
        
        <Card title="Master Volume" body="Overrides all other sound settings in this application" state={isVolume} setState={setIsVolume} />

        <Card title="Sound Quality" body="Manually control the music quality in event of poor connection" state={isSoundQuality} setState={setIsSoundQuality} />
      </div>
        <div className="Notifications">
          <h1>System Notifications:</h1>
            {!isOnline && <p>Your application is offline.  You won't be able to share or strems music to other devices.</p>}
            {!isVolume && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
            {!isSoundQuality && <p>Music quality is degraded.  Increase quality if your connection allows it.</p>}
        </div>
    </div>
  );
}

export default App;


// volume slider

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function DiscreteSlider() {
//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         aria-label="Temperature"
//         defaultValue={30}
//         getAriaValueText={valuetext}
//         valueLabelDisplay="auto"
//         step={10}
//         marks
//         min={10}
//         max={110}
//       />
//       <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
//     </Box>
//   );
// }


