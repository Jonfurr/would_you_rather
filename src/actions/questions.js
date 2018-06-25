import { saveQuestion } from '../utils/api'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const TOGGLE_QUESTION_ANSWER = 'TOGGLE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(uid, optionOne, optionTwo) {
  const authedUser = uid

  return (dispatch) => {
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
    .then((question) => dispatch(addQuestion(question)))
  }
}

function toggleQuestionAnswer({ authedUser, id, answer, questions, value, users }) {
  return {
    type: TOGGLE_QUESTION_ANSWER,
    authedUser,
    id,
    users,
    answer,
    questions,
    value
  }
}

export function handleToggleQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(toggleQuestionAnswer(info))
  }
}