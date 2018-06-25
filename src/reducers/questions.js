import {RECEIVE_QUESTIONS, TOGGLE_QUESTION_ANSWER, ADD_QUESTION} from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case TOGGLE_QUESTION_ANSWER:
  
      return {
        ...state,
        [action.questions[action.id].id]: {
          ...action.questions[action.id],
          [action.value]: {
            text: action.answer.text,
            votes: action.answer.votes.concat(action.authedUser)
          }
        }
      }

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
            optionOne: {
              votes: [],
              text: action.question.optionOne.text
            },
            optionTwo: {
              votes: [],
              text: action.question.optionTwo.text
            }
        }
        
        

      }
    default:
      return state
  }
}