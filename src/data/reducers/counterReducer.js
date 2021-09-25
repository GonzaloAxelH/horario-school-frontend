import { inicialState } from "../state/state";

export const counter = (state = inicialState.counter, action) => {
    if (action.type === 'DECREMENT') return state += 1
    if (action.type === 'INCREMENT') return state -= 1
    return state;
}