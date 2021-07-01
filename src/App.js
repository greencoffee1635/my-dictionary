import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { useSelector, useDispatch } from "react-redux";
// state 가져옴 action을 보내는 역할
import {
  loadWord,
  createWord,
  loadWordFB,
  addWordFB,
} from "./redux/modules/word";
import { firestore } from "./firebase";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadWordFB());
  },
  create: (new_item) => {
    dispatch(addWordFB(new_item));
  },
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // APP 컴포넌트의 state를 정의해줍니다.
    this.state = {};
    // ref는 이렇게 선언합니다!
    // this.text = React.createRef();
  }

  // componentDidMount() {
  //   console.log(firestore);
  // }

  // componentDidMount() {
  //   const my_dict = firestore.collection("my-dictionary");

  //   my_dict.doc("dictionary-item1").get().then((doc) => {
  //       if (doc.exists) {
  //         console.log(doc.data());
  //         console.log(doc.id);
  //       }
  //       console.log(doc.exists);
  //     });
  // }

  componentDidMount() {
    // this.props.load();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Form} />
      </div>
    );
  }
}

export default App;
