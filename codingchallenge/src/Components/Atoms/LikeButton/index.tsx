import React from "react";
import styled from "styled-components";
import { LikeOutlined } from "@ant-design/icons";
const Wrapper = styled.div``;
const StyledLikeButton = styled.button`
  border-radius: 50%;
  padding: 18px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #fff;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`;
type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};
export const LikeButton = React.memo((props: Props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <StyledLikeButton>
        <LikeOutlined />
      </StyledLikeButton>
    </Wrapper>
  );
});
