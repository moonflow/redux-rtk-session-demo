import {createStore} from "redux";
import {useEffect, useReducer, useState} from "react";

interface CounterAction {
    type: 'counter/incremented' | 'counter/decremented'
}

function counterReducer(state = { value: 0 }, action: CounterAction) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return state.value > 0 ? { value: state.value - 1 } : { value: state.value }
        default:
            return state
    }
}

let store = createStore(counterReducer)

export const ReduxCounter = () => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        store.subscribe(forceUpdate)
    }, [])

    const onIncreaseClick = () => store.dispatch({ type: 'counter/incremented' });
    const onDecreaseClick = () => store.dispatch({ type: 'counter/decremented' })
    return (<div>
        <h3>ReduxCounter</h3>
        <div>{store.getState().value}</div>
        <button onClick={onIncreaseClick}>increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
    </div>)
}
