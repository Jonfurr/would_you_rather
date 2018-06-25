import React, { Component } from 'react'
import {connect} from 'react-redux'

class AuthedUser extends Component {
  render(){
    const {authedUser, users} = this.props
    return (
      <div className='user-info'>
        <div className='avatar-container'>
          <img
            src={users[authedUser].avatarURL}
            alt={`${users[authedUser].name}'s avatar'`}
            className='avatar'
          />
        </div>
        <div className='user-stats'>
          <h3>
              Hi {users[authedUser].name.split(' ')[0]}!
            </h3>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(AuthedUser)