import { useState } from "react";
import "./App.css";
import { Route } from "react-router";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { useSelector, useDispatch } from "react-redux";
// state 가져옴 action을 보내는 역할
import { createWord } from "./redux/modules/word";

// const dummy_dict = {
//   word: "hello",
//   desc: "안녕하세요",
//   exam: "hello world",
// };

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/create" component={Form} />
    </div>
  );
}

export default App;
