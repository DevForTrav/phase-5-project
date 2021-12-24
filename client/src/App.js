import './App.css';
import Login from './components/sessions/Login'
import UserHomepage from './components/user_components/UserHomepage'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




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
