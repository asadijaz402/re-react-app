import {Switch,Route, Redirect} from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/HomePage/Home';
import Services from './component/pages/services/Services';
import Products from './component/pages/Products/Product';
import SignUp from './component/pages/SignUp/SignUp';

import Footer from './component/pages/Footer/Footer';
function App() {
    return (
        <>
          <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/product' component={Products} />
                <Route exact path='/s' component={SignUp} />

            </Switch>
            <Footer/>
          </>  
    )
}

export default App
