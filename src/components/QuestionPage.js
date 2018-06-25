import React, {Component} from 'react'
import Question from './Question'
import {connect} from 'react-redux'


class QuestionPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <h2 className='center'>Would your rather?</h2>
          <Question></Question>
        </div>
      </div>
    )
  }
}

export default connect()(QuestionPage)