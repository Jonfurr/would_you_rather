import {RECEIVE_USERS} from '../actions/users';
import {TOGGLE_QUESTION_ANSWER} from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case TOGGLE_QUESTION_ANSWER:
      {
        console.log(action.users[action.authedUser].answers, action.id)
        return {
          ...state,
          [action.users[action.authedUser].id]: {
            ...action.users[action.authedUser],
            answers: {
              ...action.users[action.authedUser].answers,
              [action.id]: action.value
            }
          }

        }
      }
    default:
      return state
  }
}