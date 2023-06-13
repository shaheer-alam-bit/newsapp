import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  size = 6;
  country = "us";

  state = {
    progress :0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render(){
    return (
      <>
      <div>
        <Router>
        <Navbar title="NEWS ONLINE"/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress}  key="general" pageSize={this.size} country={this.country} category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress}  key="business" pageSize={this.size} country={this.country} category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress}  key="entertainment" pageSize={this.size} country={this.country} category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={this.setProgress}  key="general" pageSize={this.size} country={this.country} category="general"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress}  key="health" pageSize={this.size} country={this.country} category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress}  key="science" pageSize={this.size} country={this.country} category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress}  key="sports" pageSize={this.size} country={this.country} category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress}  key="technology" pageSize={this.size} country={this.country} category="technology"/></Route>
        </Switch>
        </Router>
      </div> 
      </>
    )
  }
}
