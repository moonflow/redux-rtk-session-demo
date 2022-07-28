import {createStore} from "redux";
import {useEffect, useState} from "react";

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
    const [count, setCount] = useState(0);

    useEffect(() => {
        store.subscribe(() => setCount(store.getState().value))
    }, [])

    const onIncreaseClick = () => store.dispatch({ type: 'counter/incremented' });
    const onDecreaseClick = () => store.dispatch({ type: 'counter/decremented' })
    return (<div>
        <h3>SetStateCounter</h3>
        <div>{count}</div>
        <button onClick={onIncreaseClick}>increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
    </div>)
}
