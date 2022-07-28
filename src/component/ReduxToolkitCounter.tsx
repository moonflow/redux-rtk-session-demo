import {createStore} from "redux";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter1',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

const { incremented, decremented } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})

export const ReduxToolkitCounter = () => {
    const count = useSelector(state => (state as any).value)
    const dispatch = useDispatch()

    const onIncreaseClick = () => dispatch(incremented());
    const onDecreaseClick = () => dispatch(decremented());
    return (<div>
        <h3>ReactReduxCounter</h3>
        <div>{count}</div>
        <button onClick={onIncreaseClick}>increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
    </div>)
}
