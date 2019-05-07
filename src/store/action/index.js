import {combineEpics} from 'redux-observable'
import {pingEpic, sendPing} from './ping.action'
import {fetchUserEpic, fetchUser, cancelFetchUser} from './users.action'
import {incrementIfOddEpic, increment, incrementIfOdd} from './count.action'

export const rootEpic = combineEpics(
  pingEpic,
  fetchUserEpic,
  incrementIfOddEpic
)

export {sendPing, fetchUser, cancelFetchUser, increment, incrementIfOdd}