import React from 'react';
import './App.css';
import {SetStateCounter} from "./component/SetStateCounter";
import {ReduxCounter} from "./component/ReduxCounter";
import {ReactReduxCounter, store} from "./component/ReactReduxCounter";
import {Provider} from "react-redux";

function App() {
  return (
      <>
        <SetStateCounter></SetStateCounter>
        <ReduxCounter></ReduxCounter>
        <Provider store={store}>
            <ReactReduxCounter></ReactReduxCounter>
        </Provider>
      </>
  );
}

export default App;
