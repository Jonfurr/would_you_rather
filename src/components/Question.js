import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleToggleQuestionAnswer} from '../actions/questions'
import {formatDate} from '../utils/helpers.js'
import {withRouter} from 'react-router-dom'

class Question extends Component {

  handleAnswerQuestion = (e) => {
    e.preventDefault()
    const optionBtns = document.querySelectorAll('button')
    const value = e.target.value;
    const {dispatch, questions, authedUser, users} = this.props
    const {id} = this.props.match.params

    optionBtns[1].disabled = true;
    optionBtns[0].disabled = true;

    if (optionBtns[0].value === value) {
      optionBtns[0]
        .classList
        .add('selected')
    }
    if (optionBtns[1].value === value) {
      optionBtns[1]
        .classList
        .add('selected')
    }

    dispatch(handleToggleQuestionAnswer({
      authedUser: authedUser,
      id: questions[id].id,
      value: value,
      answer: questions[id][value],
      questions: questions,
      users: users
    }))

  }

  render() {

    const {questions, authedUser, users} = this.props
    const {id} = this.props.match.params
    const question = questions[id]
    const answer = users[authedUser].answers[id]

    let disabled = false
    let selectedOne = ''
    let selectedTwo = ''

    if (answer) {
      disabled = true
    }

    if (answer === 'optionOne') {
      selectedOne = 'selected'
    }

    if (answer === 'optionTwo') {
      selectedTwo = 'selected'
    }

    return (

      <div className='question'>

        <div className='answers'>
          <button
            className={selectedOne}
            disabled={disabled}
            onClick={this.handleAnswerQuestion}
            value='optionOne'>
            {question.optionOne.text}
          </button>
          <button
            className={selectedTwo}
            disabled={disabled}
            onClick={this.handleAnswerQuestion}
            value='optionTwo'>{question.optionTwo.text}</button>
        </div>
        <div
          className={answer
          ? 'answered-stats'
          : 'hidden answered-stats'}>
          <div className='option-one-stats center'>
            <p>{question.optionOne.votes.length}
              people chose {question.optionOne.text}</p>
            <span className="percent">{(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100).toFixed(2)}%</span>
          </div>
          <div className='option-one-stats center'>
            <p>{question.optionTwo.votes.length}
              people chose {question.optionTwo.text}</p>
            <span className="percent">{(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100).toFixed(2)}%</span>
          </div>
        </div>
        <div className='question-data center'>
          <img
            alt={`${users[question.author]}'s avatar`}
            src={users[question.author].avatarURL}className='avatar'/>
          <h5>Submitted by: {question.author}</h5>
          <h6>{formatDate(question.timestamp)}</h6>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, questions, users}) {

  return {authedUser, questions, users}
}
export default withRouter(connect(mapStateToProps)(Question))