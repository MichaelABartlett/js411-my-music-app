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

      {/* <Button variant="outlined" onClick={handleClick}>Outlined</Button> */}
      <Card title= "Online Mode" body= "Is this application connected to the internet?"  state={isOnline} setState={setIsOnline} />
      
      <Card title="Master Volume" body="Overrides all other sound settings in this application" state={isVolume} setState={setIsVolume} />

      <Card title="Sound Quality" body="Manually control the music quality in event of poor connection" state={isSoundQuality} setState={setIsSoundQuality} />

      <h1>System Notifications:</h1>
      {!isOnline && <p>Your application is offline.  You won't be able to share or strems music to other devices.</p>}
      {!isVolume && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
      {!isSoundQuality && <p>Music quality is degraded.  Increase quality if your connection allows it.</p>}
    </div>
  );
}

export default App;


// this was working
// import {useState} from 'react';
// //import Button from './components/Button'
// import Card from './components/Card'
// import "./App.css";

// function App() {

//   const [isOnline, setIsOnline] = useState(true)
 
//   return (
//     <div className="App">
//       {/* <Button variant="outlined" onClick={handleClick}>Outlined</Button> */}
//       <Card isOnline={isOnline} setIsOnline={setIsOnline} />
//       {!isOnline && <p>Your application is offline.  You won't be able to share or strems music to other devices. </p>}
//     </div>
//   );
// }

// export default App;