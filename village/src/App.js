import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = newSmurf => {
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log(res);
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink to='/'>VILLAGE</NavLink>
          <NavLink to='/smurfform'> Add Smurf</NavLink>
        </nav>

        <Route
        path='/smurfform'
        render={ props => (
          <SmurfForm {...props}
          addSmurf={this.addSmurf}
          />
        )}
        />

        <Route
        exact path='/'
        render={ props => (
          <Smurfs {...props}
          smurfs={this.state.smurfs}
          />
        )}
        />
      </div>
    );
  }
}

export default App;
