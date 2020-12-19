import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #f5f7fa;
  padding: 10px;
  margin: 0 auto;

  background-color: #f5f7fa;
  border-radius: 20px;
`;

export const MatchCard = React.memo((props) => {
  return <Wrapper>{props.children}</Wrapper>;
});
