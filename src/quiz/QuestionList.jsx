import React, { Component } from 'react';
import Question from './Question.jsx'

class QuestionList extends Component {

  render() {
    return (
      <div className="questions">
        {
        // eslint-disable-next-line
            this.props.questions.map(question => {
                if(question.id === this.props.current) { 
                // eslint-disable-next-line
               return <Question question={question} key={question.id} {...this.props}/> 
                }
            })
        }
      </div>

    );
  }
}

export default QuestionList;
