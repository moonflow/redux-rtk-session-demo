import {useState} from "react";


export const SetStateCounter = () => {
    const [count, countState] = useState(0);
    const onIncreaseClick = () => countState(count + 1);
    const onDecreaseClick = () => countState(count > 0 ? count - 1 : count);
    return (<div>
        <h3>SetStateCounter</h3>
        <div>{count}</div>
        <button onClick={onIncreaseClick}>increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
    </div>)
}
