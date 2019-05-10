import React, { Component } from 'react';
import Smurf from './Smurf';
import "./SmurfStyle.css";

class Smurfs extends Component {
 

  render() {
    return (
      <div className="smurfs">
        <h1>SMURF VILLAGE CITIZENS</h1>
        <div className="smurf-cards">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
          </div>
          </div>
)
}
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
