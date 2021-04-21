// react router
import {Switch, Route} from 'react-router-dom';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import './App.css';
import $ from 'jquery';

import Navbar from './Component/layouts/Navbar';
import Footer from './Component/layouts/Footer';

//pages
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Notfound from './Component/pages/Notfound';

export default class App extends Component {

  componentDidMount(){
    console.log($('a'));
  }
  

  render() {
    return (
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route component={Notfound}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}
