import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import BootstrapCarousel from './components/carousel/BootstrapCarousel';
// import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from './components/Nav/Navbar';
// import './App.css';
import BootstrapCarousel from './components/carousel/BootstrapCarousel';
// import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp'
import Login from './components/Login';


function App() {
  return (

    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={BootstrapCarousel} />
            {/* <Route path='/project/:id' component={ProjectDetails} /> */}
            <Route exact path="/login" component={Login} />

            {/* <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}

export default App;