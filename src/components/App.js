import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import NotFound from './NotFound'
import Leaderboard from './Leaderboard'

class App extends Component {

  componentDidMount() {
    this
      .props
      .dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          {this.props.loading === true
            ? <div className='container'><Login/></div>
            : <div>
              <Header/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/question/:id' component={QuestionPage}/>
                <Route exact path='/add' component={NewQuestion}/>
                <Route exact path='/leaderboard' component={Leaderboard}/>
                <Route component={NotFound}/>
              </Switch>
            </div>}

        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null,
    authedUser: authedUser
  }
}
export default connect(mapStateToProps)(App)
