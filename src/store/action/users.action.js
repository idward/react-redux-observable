import {ajax} from 'rxjs/ajax'
import {
  filter, mergeMap, map,
  delay, takeUntil, catchError
} from 'rxjs/operators'
import {of} from 'rxjs'
import {
  FETCH_USER,
  FETCH_USER_FULFILLED,
  FETCH_USER_CANCELLED,
  FETCH_USER_ERROR
} from './constant'

export const fetchUser = user => {
  return {type: FETCH_USER, user}
}

export const fetchUserFulfilled = user => {
  return {type: FETCH_USER_FULFILLED, user}
}

export const cancelFetchUser = () => {
  return {type: FETCH_USER_CANCELLED}
}

// export const errorHandle = (error) => {
//   return {type: FETCH_USER_ERROR, error}
// }

export const fetchUserEpic = action$ => (
  action$.pipe(
    filter(action => action.type === FETCH_USER),
    mergeMap(action => {
      return ajax.getJSON(`https://api.github.com/users/${action.user}`)
        .pipe(
          delay(4000),
          map(response => fetchUserFulfilled(response)),
          catchError(error => of({
            type: FETCH_USER_ERROR,
            error: error.xhr.response
          })),
          takeUntil(
            action$.pipe(
              filter(action => action.type === FETCH_USER_CANCELLED)
            )
          )
        )
    })
  )
)