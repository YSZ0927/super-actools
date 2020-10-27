
import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { RootState } from '@/typings/state'

let  history = createBrowserHistory()

let reducers: ReducersMapObject<RootState, AnyAction> = {
    // @ts-ignore
    router: connectRouter(history)  // https://github.com/supasate/connected-react-router/issues/195
}
const rootReducer: Reducer<RootState, AnyAction> = combineReducers<RootState, AnyAction>(reducers)

// export type RootState = {
//     [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
// }
export default rootReducer