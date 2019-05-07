import {INCREMENT, INCREMENT_IF_ODD} from './constant'
import {filter, map, tap, take} from 'rxjs/operators'

export const increment = () => ({type: INCREMENT})
export const incrementIfOdd = () => ({type: INCREMENT_IF_ODD})

export const incrementIfOddEpic = (action$, state$) => (
  action$.pipe(
    filter(action => action.type === INCREMENT_IF_ODD),
    //tap(() => console.log(state$.value.count)),
    filter(() => state$.value.count % 2 === 1),
    map(() => increment())
  )
)