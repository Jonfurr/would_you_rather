import React, { Component } from 'react'
import AuthedUser from './AuthedUser'
import Nav from './Nav'


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <AuthedUser />
        <Nav />
      </div>
    )
  }
}

export default Header