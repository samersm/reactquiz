import React, { Component } from 'react';

class Scorebox extends Component {

  render() {
    return (
      <div className="container well">
        Question {this.props.current} out of {this.props.questions.length} <span className="pull-right"><strong>Score: {this.props.score}</strong></span>
      </div>

    );
  }
}

export default Scorebox;
