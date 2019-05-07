import {createStore, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {rootEpic} from './action'
import reducers from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)

export default store