import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends Component {

  handleToggle = (e) => {
    e.preventDefault()

    const lists = document.querySelectorAll('.question-list')
    const title = document.querySelector('.questions-title');
    lists[0]
      .classList
      .toggle('active')
    lists[1]
      .classList
      .toggle('active')

    if (lists[0].classList.contains('active')) {
      e.target.innerHTML = 'Show Unanswered Questions'
      title.innerHTML = 'Your Answered Questions'
    }
    if (lists[1].classList.contains('active')) {
      e.target.innerHTML = 'Show Answered Questions'
      title.innerHTML = 'Your Unanswered Questions'
    }
  }

  render() {
    const {questionIds, answeredIds} = this.props

    let filtered = questionIds.filter(function (e) {
      return this.indexOf(e) < 0;
    }, answeredIds)

    return (
      <div className='container'>
        <h2 className='questions-title center'>Your Unanswered Questions</h2>
        <ol className='question-list answered'>
          {answeredIds.map((id) => (
            <li key={id}>
              <Link to={`/question/${id}`} id={id}>
                <span>{`${this.props.questions[id].optionOne.text} OR ${this.props.questions[id].optionTwo.text}?`
}</span>
              </Link>
            </li>
          ))}
        </ol>
        <ol className='question-list unanswered active'>
          {filtered.map((id) => (
            <li key={id}>
              <Link to={`/question/${id}`} id={id}>
                <span>{`${this.props.questions[id].optionOne.text} OR ${this.props.questions[id].optionTwo.text}?`
}</span>
              </Link>
            </li>
          ))}
        </ol>
        <div className='questions-toggle'>
          <button onClick={this.handleToggle}>Show Answered Questions</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  const userId = users[authedUser]
  const answers = userId.answers

  return {
    users,
    authedUser,
    questions,
    answeredIds: Object
      .keys(answers)
      .sort((a, b) => answers[b].timestamp - questions[a].timestamp),
    questionIds: Object
      .keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)