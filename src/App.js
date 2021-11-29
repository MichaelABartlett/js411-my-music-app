import {useState} from 'react';
import Card from './components/Card'
import CardVolume from './components/CardVolume'
import CardQuality from './components/CardQuality'
import Loggedin from './components/LoggedIn'
import "./App.css";
import Switch from '@mui/material/Switch';


function App() {

    const [isOnline, setIsOnline] = useState(true)

  const [isVolume, setIsVolume] = useState('')

  const [isSoundQuality, setIsSoundQuality] = useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return ( 
    

    isLoggedIn ? <Loggedin state={isLoggedIn} setState={setIsLoggedIn}  /> : (
    
    <div className="App">
      <div>
        <h1 style={{ color:'grey'}} >Welcome User</h1>
      </div>
        <div className="Cards">
          <div className="OnlineMode" >
            <Card title= "Online Mode" 
                  body= "Is this application connected to the internet?"  
                  state={isOnline} 
                  setState={setIsOnline} 
                  component={Switch}
                  />
          </div>
          <div className="MasterVolume">
            <CardVolume title= "Master Volume" 
                  body= "Overrides all other sound setting in this application"  
                  state={isVolume} 
                  setState={setIsVolume} 
                  />
          </div>
          <div className="SoundQuality">
            <CardQuality title= "Sound Quality" 
                  body= "Manually control the music quality in event of poor connection"  
                  state={isSoundQuality} 
                  setState={setIsSoundQuality} 
                  />
          </div>
        </div>
          <div className="Notifications">
            <h1>System Notifications:</h1>
              {!isOnline && <p>Your application is offline.  You won't be able to share or strems music to other devices.</p>}
              {isVolume > 80 && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
              {isSoundQuality === 1 && <p>Music quality is degraded.  Increase quality if your connection allows it.</p>}
          </div>
            
    </div>
       )
      
  );
}

export default App;

