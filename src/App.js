import React from "react";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import myStore from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
