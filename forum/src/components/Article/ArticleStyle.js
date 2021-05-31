import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  border-bottom: 2px solid rgb(66, 104, 255);
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;
const Author = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: rgba(112, 255, 117);
`;

const Title = styled.h2`
  font-weight: bold;
  width: 100%;
`;

const Date = styled.div`
  width: 240px;
  height: 20px;
  font-size: 12px;
  color: rgb(176, 176, 176);
  font-size: 10px;
  text-align: right;
  
`;

export {StyledWrapper,Author,Title,Date}