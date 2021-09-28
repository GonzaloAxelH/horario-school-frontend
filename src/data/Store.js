import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tareasReducer } from './reducers/counterReducer'
import { inicialState } from "./state/state";

const theme = (state = inicialState.darkTheme, action) => {
    if (action.type === 'CHANGE_THEME') return !state;
    return state;
}

export default createStore(combineReducers({
     tareas:tareasReducer
     , theme }), applyMiddleware(thunk))
