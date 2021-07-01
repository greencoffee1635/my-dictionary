import styled from "styled-components";
import Card from "../components/Card";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { loadWordFB } from "../redux/modules/word";

const Home = (props) => {
  const dict = useSelector((state) => state.word.word_list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <Container>
      <Title>MY DICTIONARY</Title>
      <Overflow>
        {dict.map((word, index) => (
          <Card
            key={index}
            word={word.word}
            desc={word.desc}
            exam={word.exam}
          ></Card>
        ))}
      </Overflow>
      <Btn onClick={() => props.history.push("/create")}>
        <span>+</span>
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  max-width: 350px;
  height: 80vh;
  background-color: #e2fff8;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  position: relative;
`;

const Overflow = styled.div`
  position: relative;
  height: 80%;
  overflow-y: scroll;
`;

const Title = styled.h1`
  color: black;
  text-align: left;
  font-size: 25px;
  font-weight: 450;
`;

const Btn = styled.button`
  background-color: #6100ff;
  color: white;
  font-size: 60px;
  font-weight: bold;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 650px;
  right: 40px;
  width: 50px;
  height: 50px;
  padding: 0;
  & > span {
    position: absolute;
    top: -11px;
    left: 6px;
  }
`;

export default withRouter(Home);
