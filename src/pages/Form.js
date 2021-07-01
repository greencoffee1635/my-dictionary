import React, { useRef } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createWord, addWordFB } from "../redux/modules/word";

const Form = (props) => {
  const dispatch = useDispatch();

  const word_ref = useRef(null);
  const desc_ref = useRef(null);
  const exam_ref = useRef(null);

  return (
    <AddContainer>
      <Title>단어 추가하기</Title>
      <InputWrapper>
        <p>단어</p>
        <input type="text" ref={word_ref} />
      </InputWrapper>
      <InputWrapper>
        <p>설명</p>
        <textarea type="text" ref={desc_ref} />
      </InputWrapper>
      <InputWrapper>
        <p>예시</p>
        <input type="text" ref={exam_ref} />
      </InputWrapper>
      <AddBtn
        onClick={() => {
          dispatch(
            addWordFB(
              word_ref.current.value,
              desc_ref.current.value,
              exam_ref.current.value
            )
          );
          window.alert("완료");
          props.history.replace("/");
        }}
      >
        추가하기
      </AddBtn>
    </AddContainer>
  );
};

const AddContainer = styled.div`
  max-width: 350px;
  min-height: 730px;
  background-color: #e2fff8;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  position: relative;
`;

const Title = styled.h1`
  color: black;
  text-align: left;
  font-size: 25px;
  font-weight: 450;
`;

const AddBtn = styled.button`
  background-color: #6100ff;
  color: white;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 450px;
  right: 15px;
  width: 352px;
  height: 50px;
  padding: 0;
  & > span {
    position: absolute;
    top: -16px;
    right: 1px;
  }
`;

const InputWrapper = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;

  & > p {
    text-decoration: underline;
    text-align: left;
    font-size: 9px;
    color: #2f3542;
    margin: 4px 0px;
  }

  & > input {
    text-align: "left";
    border: 1px solid #000000;
    width: 320px;
    height: 50px;
    padding: 2px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
  }

  & > textarea {
    text-align: "left";
    border: 1px solid #000000;
    width: 320px;
    height: 50px;
    padding: 2px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
    word-break: break-all;
    white-space: pre-wrap;
  }
`;

export default withRouter(Form);
