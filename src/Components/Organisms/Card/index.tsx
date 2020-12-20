import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #f5f7fa;
  margin: 0 auto;
  background-color: #f5f7fa;
  box-shadow: 20px -10px 25px 0 #d9d9d9;
  margin-top: 150px;
  border-radius: 20px;
`;

export const Card: FC = React.memo((props) => {
  return <Wrapper>{props.children}</Wrapper>;
});
