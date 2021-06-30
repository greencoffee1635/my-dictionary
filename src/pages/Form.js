import { useRef } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { createWord } from "../redux/modules/word";
// 액션을가져옴
import { useDispatch } from "react-redux";
// 여기선,,함수 노란색 변수 파란색이네...
// 소괄호 화살표 함수다,,
const Form = (props) => {
  const dispatch = useDispatch();
  // const setDict = (data) => {
  //   const action = createWord(data);
  //   dispatch(action);
  // };
  const wordRef = useRef();
  const descRef = useRef();
  const examRef = useRef();

  const handleCreate = () => {
    const data = {
      word: wordRef.current.value,
      desc: descRef.current.value,
      exam: examRef.current.value,
    };

    dispatch(createWord(data));
    props.history.push("/");
  };

  return (
    <AddContainer>
      <Title>단어 추가하기</Title>
      <InputWrapper>
        <p>단어</p>
        <input type="text" ref={wordRef} />
      </InputWrapper>
      <InputWrapper>
        <p>설명</p>
        <textarea type="text" ref={descRef} />
      </InputWrapper>
      <InputWrapper>
        <p>예시</p>
        <input type="text" ref={examRef} />
      </InputWrapper>
      <AddBtn onClick={handleCreate}>추가하기</AddBtn>
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
