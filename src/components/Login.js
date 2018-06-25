import React, { Component } from 'react'
import {setAuthedUser} from '../actions/authedUser'
import {connect} from 'react-redux'
class Login extends Component {
  state = {
    value: null,
    toHome: false
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { value } = this.state
    const { dispatch, id } = this.props

    if(value !== null ) {
      dispatch(setAuthedUser(value))
    }
    else {
      alert('Please select a user from the list')
    }


    this.setState(() => ({
      toHome: id ? false : true
    }))
  }
  render() {
    return (
      <div className='center'>
        <h3 className='page-title center'>Please Login</h3>
        <form className='login center' onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option selected defaultValue='' disabled="disabled">Select User</option>   
            <option value='sarahedo'>Sarah Edo</option>
            <option value='tylermcginnis'>Tyler McGinnis</option>
            <option value='johndoe'>John Doe</option>
          </select>
          <button
            className='btn'
            type='submit'
           
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(Login)