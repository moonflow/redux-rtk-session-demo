import {createStore} from "redux";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

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

export const store = createStore(counterReducer)

export const ReactReduxCounter = () => {
    const count = useSelector(state => (state as any).value)
    const dispatch = useDispatch()

    const onIncreaseClick = () => dispatch({ type: 'counter/incremented' });
    const onDecreaseClick = () => dispatch({ type: 'counter/decremented' })
    return (<div>
        <h3>ReactReduxCounter</h3>
        <div>{count}</div>
        <button onClick={onIncreaseClick}>increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
    </div>)
}
