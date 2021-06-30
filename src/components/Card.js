import styled from "styled-components";

const Card = (props) => {
  const data = props.word;
  const word = data.word;
  const desc = data.desc;
  const exam = data.exam;
  return (
    <CardContainer>
      <DictList>
        <p>단어</p>
      </DictList>
      <Text style={{ marginTop: "-5px" }}>{word}</Text>
      <DictList>
        <p>설명</p>
      </DictList>
      <Text style={{ marginTop: "-5px" }}>{desc}</Text>
      <DictList>
        <p>예시</p>
      </DictList>
      <Text
        style={{ marginTop: "-5px", marginBottom: "10px", color: "#79B7FF" }}
      >
        {exam}
      </Text>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
`;

const DictList = styled.text`
  text-decoration: underline;
  text-align: left;
  font-size: 9px;
  color: #2f3542;
`;

const Text = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 450;
  white-space: pre-wrap;
`;

export default Card;
