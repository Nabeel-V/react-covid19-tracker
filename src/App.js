import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as BR,Switch, Route } from 'react-router-dom'
import India from './Components/India'
import World from './Components/World'
import Header from './Components/Header'
import StateData from './Components/StateData'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <BR>
          <Header/>
           <Switch>
             <Route exact path="/">
                <India/>
             </Route>
             <Route path="/india">
                <India/>
             </Route>
             <Route path="/world">
                <World/>
             </Route>
             <Route path="/statedata">
               <StateData/>
             </Route>
           </Switch>
        </BR>
      </div>
    )
  }
}

