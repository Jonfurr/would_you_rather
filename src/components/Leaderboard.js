import React, {Component} from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
  
  render() {
    const { users, id } = this.props
    const user = users[id]

    const inlineStyles = {
      order: this.props.score
    }

    return (
      <div className='user-card' style={inlineStyles}>
        <img alt={`${user.name}'s avatar'`}className='avatar' src={user.avatarURL} />
        <h3>{user.name}</h3>
        <div className='leaderboard-stats'>
          <span>{`Questions asked: ${user.questions.length}`}</span>
          <span>{`Questions answered: ${Object.keys(user.answers).length}`}</span>
        </div>
      </div>
    )
  }
}



class Leaderboard extends Component {

  sort = () => {
    const { users } = this.props
    const usersArr = Object.keys(users)
    const scores = {}

    usersArr.map((user) => {
      const score = (users[user].questions.length) + (Object.keys(users[user].answers).length)
      return scores[user] = score
    })
    
    return scores
  }

  render() {
    const { users, userIds } = this.props
    const sorted = this.sort()
    return (
      <div className='container'>
        <h2 className='page-title center'>Leaderboard</h2>
        <div className='leaderboard'>
          {userIds.map((id) => (
            <UserCard key={id} users={users} id={id} score={sorted[id]} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }){
  return {
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)