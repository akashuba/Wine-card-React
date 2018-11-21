import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from '../reducer'
import { fetchWinesEpic } from '../epics/fetchWinesEpic'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)))

epicMiddleware.run(fetchWinesEpic)

export default store
