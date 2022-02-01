import './App.css';
import Login from './components/sessions/Login'
import Navigation from './components/Navigation';
import UserHomepage from './components/user_components/UserHomepage'
import CoffeeShopPage from './components/coffee_shops/CoffeeShopPage';
import UserFavorites from './components/coffee_shops/UserFavorites';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { getUser } from './custom_modules/getUser';
import { getUserLocation } from './custom_modules/userLocation';




function App() {

  const [loggedIn, setLoggedIn ] = useState(true)
  const [user, setUser] = useState(null)
  const [userLocation, setUserLocation] = useState({})

  const getData = () =>  {
    getUserLocation(setUserLocation)
    getUser(setUser)
  }


  useEffect((
    () => {
        getData()
    }
  ),[])

  
  return (
    <>

      <Navigation user={user} isLoggedIn={setLoggedIn} />
      <BrowserRouter>
        <Routes>
          <>
          <Route path="home" element={
            <div className="App">
              {loggedIn ? 
                <UserHomepage user={user} setUser={setUser} setLoggedIn={setLoggedIn} userLocation={userLocation} /> 
                  : 
                <Login  isLoggedIn={setLoggedIn} />
              }
            </div>
          } />
          { user && ( <Route path="favorites" element={
            <div className="App"> 
              <UserFavorites user={user} userLocation={userLocation} /> 
            </div> 
          }/>)}
          <Route path="profile" element={"<Profile/>"} />
          <Route path="/kaffico/:coffeeShopId" element={<CoffeeShopPage/>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
