import './App.css';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login'
import Navigation from './components/Navigation';
import UserHomepage from './components/UserHomepage'
import axios from 'axios';
import {useState} from 'react'
import LogoutButton from './components/sessions/LogoutButton';



function App() {

  const [loggedIn, setLoggedIn ] = useState(true)

  
  return (
    <div className="App">
      {loggedIn ? <UserHomepage isLoggedIn={setLoggedIn} /> : <Login  isLoggedIn={setLoggedIn} />}
      {/* <LogoutButton isLoggedIn={setLoggedIn} /> */}
    </div>
  );
}

export default App;
