import {useState} from "react";


export const SetStateCounter = () => {
    const [count, setState] = useState(0);
    const onIncreaseClick = () => setState(count + 1);
    const onDecreaseClick = () => setState(count > 0 ? count - 1 : count);
    return (<div>
        <h3>SetStateCounter</h3>
        <div>{count}</div>
        <button onClick={onIncreaseClick}>increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
    </div>)
}
