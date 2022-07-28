import React from 'react';
import './App.css';
import {SetStateCounter} from "./component/SetStateCounter";
import {ReduxCounter} from "./component/ReduxCounter";

function App() {
  return (
      <>
        <SetStateCounter></SetStateCounter>
        <ReduxCounter></ReduxCounter>
      </>
  );
}

export default App;
