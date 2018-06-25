import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
class Nav extends Component {

  handleLogout = (e) => {
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(setAuthedUser(null))
  }
  
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <a onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default connect()(Nav)