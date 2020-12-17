import React from "react";
import styled from "styled-components";
import { DislikeOutlined } from "@ant-design/icons";
const StyledDislikeButton = styled.button`
  border-radius: 50%;
  padding: 18px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #fff;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`;
export const DislikeButton = React.memo(() => {
  return (
    <div>
      <StyledDislikeButton>
        <DislikeOutlined />
      </StyledDislikeButton>
    </div>
  );
});
