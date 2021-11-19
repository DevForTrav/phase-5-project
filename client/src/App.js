import './App.css';
import LogoutButton from './components/LogoutButton';
import Signup from './components/Signup';
import Login from './components/Login'


function App() {



  return (
    <div className="App">
      <div>
        <Signup />
        <Login />
        <LogoutButton />
      </div>
    </div>
  );
}

export default App;
