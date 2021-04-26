// react router
import {Switch, Route} from 'react-router-dom';

import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import './App.css';

import Navbar from './Component/Templates/Navbar';
import Footer from './Component/Templates/Footer';

//pages
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Notfound from './Component/Pages/Notfound';
import Sukses from './Component/Pages/Sukses';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/sukses">
              <Sukses/>
            </Route>
            <Route component={Notfound}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}
