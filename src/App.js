import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
              {
                id: 'a',
                text: 'Michel'
              },
              {
                id: 'b',
                text: 'Brad'
              },
              {
                id: 'c',
                text: 'Steven'
              }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
              {
                id: 'a',
                text: 'Sara'
              },
              {
                id: 'b',
                text: 'Sue'
              },
              {
                id: 'c',
                text: 'Donna'
              }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
              {
                id: 'a',
                text: 'Bobby'
              },
              {
                id: 'b',
                text: 'Harry'
              },
              {
                id: 'c',
                text: 'Wayne'
              }
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
              {
                id: 'a',
                text: 'John'
              },
              {
                id: 'b',
                text: 'Paul'
              },
              {
                id: 'c',
                text: 'Jose'
              }
          ],
          correct: 'a'
        }
        ],
        score: 0,
        current: 1
    };
  }
  
  setCurrent(current) {
    this.setState({current});
  }
  
  setScore(score) {
    this.setState({score});
  }
  
  render() {
    if(this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
          <br />
        </div>
        <br />
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p className="lead">A simple quiz application written in React.js</p>
        </div>
      </div>
    </div>
        <p className="App-intro">
        <br />
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
        </p>

      </div>

    );
  }
}

export default App;
