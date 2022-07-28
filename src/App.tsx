import React from 'react';
import './App.css';
import {SetStateCounter} from "./component/SetStateCounter";
import {ReduxCounter} from "./component/ReduxCounter";
import {ReactReduxCounter, store as ReactReduxCounterStore} from "./component/ReactReduxCounter";
import {Provider} from "react-redux";
import {ReduxToolkitCounter, store as ReduxToolkitStore} from "./component/ReduxToolkitCounter";

function App() {
  return (
      <>
        <SetStateCounter></SetStateCounter>
        <ReduxCounter></ReduxCounter>
        <Provider store={ReactReduxCounterStore}>
            <ReactReduxCounter></ReactReduxCounter>
        </Provider>
        <Provider store={ReduxToolkitStore}>
            <ReduxToolkitCounter></ReduxToolkitCounter>
        </Provider>
      </>
  );
}

export default App;
