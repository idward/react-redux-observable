import {filter, mapTo, delay} from 'rxjs/operators'
import {PING, PONG} from './constant'

export const sendPing = () => {
  return {type: PING}
}

export const pingEpic = action$ => (
  action$.pipe(
    filter(action => action.type === PING),
    delay(2000),
    mapTo({type: PONG})
  )
)