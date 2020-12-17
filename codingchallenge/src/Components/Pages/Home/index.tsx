import React from "react";
import { Card } from "../../Organisms/Card";
import { LikeButton } from "../../Atoms/LikeButton";
import { DislikeButton } from "../../Atoms/DislikeButton";
import { MatchCard } from "../../Organisms/MatchCard";
import styled from "styled-components";
import Person3 from "../../../Img/person3.jpg";
const Wrapper = styled.div``;
const Title = styled.h1`
  text-align: center;
  font-size: 12px;
`;
const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 20px;
`;
export const Home = () => {
  return (
    <Wrapper>
      <Card>
        <Title>お相手からのいいね！</Title>
        <MatchCard>
          <StyledImg src={Person3} />
          <ButtonWrapper>
            <DislikeButton />
            <LikeButton />
          </ButtonWrapper>
        </MatchCard>
      </Card>
    </Wrapper>
  );
};
