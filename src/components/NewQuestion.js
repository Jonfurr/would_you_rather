import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'



class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChangeOne = (e) => {
    const text = e.target.value
    this.setState(() => ({
      optionOne: text
    }))
  }

  handleChangeTwo = (e) => {
    const text = e.target.value
    this.setState(() => ({
      optionTwo: text
    }))
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch, id, authedUser } = this.props
    dispatch(handleAddQuestion(authedUser, optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: id ? false : true
    }))
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div className='container'>
        <h2 className='center new-question-title'>Would You Rather?</h2>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <input
              placeholder="Answer One"
              type= 'text'
              value={optionOne}
              onChange={this.handleChangeOne}
              className='center input'
            />
            <input
              placeholder="Answer Two"
              type='text'
              value={optionTwo}
              onChange={this.handleChangeTwo}
              className='center input'
            />
          </div>
         
          <button
            className='btn submit-btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}
          >
            Ask!
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)