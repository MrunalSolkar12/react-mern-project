import React from 'react';
import {Route} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/Home';

const App = () => {
  return (
   <>
        <Route exact path="/register">
          <Register/>
          </Route>
      
        <Route exact path="/login">
          <Login/>
          </Route>

          <Route exact path="/Home">
          <Home/>
          </Route>
      

    </>
  )
}

export default App
