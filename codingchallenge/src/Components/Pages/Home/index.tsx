import React, { useEffect, useState } from "react";
import { Card } from "../../Organisms/Card";
import { LikeButton } from "../../Atoms/LikeButton";
import { DislikeButton } from "../../Atoms/DislikeButton";
import { MatchCard } from "../../Organisms/MatchCard";
import styled, { keyframes } from "styled-components";
import UserData from "../../../data.json";

export const Home = () => {
  const [index, setIndex] = useState<number>(0);
  const [isLikeButtonClicked, setIsLikeButtonClicked] = useState<boolean>(
    false
  );
  const [isDisLikeButtonClicked, setIsDisLikeButtonClicked] = useState<boolean>(
    false
  );
  const Wrapper = styled.div``;
  const swipeRight = keyframes`
  to {
    transform: rotate(13deg) translate3d(100%, 0, 0);
    opacity: 0;
}
`;
  const swipeLeft = keyframes`
  to {
    transform: rotate(-13deg) translate3d(-100%, 0, 0);
    opacity: 0;
}
`;
  const NoneUser = styled.div`
    height: 400px;
  `;
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
    animation: ${isLikeButtonClicked && swipeRight}
      ${isDisLikeButtonClicked && swipeLeft}　2.0s forwards;
    animation-timing-function: ease-in;
    -webkit-animation-timing-function: ease-in;
    -webkit-animation: ${isLikeButtonClicked && swipeRight}
      ${isDisLikeButtonClicked && swipeLeft} 1s forwards;
    width: 100%;
    height: 400px;
    border-radius: 20px;
  `;
  const clickHandler = (i: number, type: string) => {
    const currentNumber = i + 1;

    if (type === "like") {
      setIsLikeButtonClicked(true);
    } else if (type === "dislike") {
      setIsDisLikeButtonClicked(true);
    }
    // 次の画像に移るのをアニメーションが終わったらに
    setTimeout(() => {
      setIndex(currentNumber);
    }, [1000]);

    if (i > 3) {
      alert("ユーザーがいません！リロードしてください");
    }
  };

  useEffect(() => {
    //アニメーションを初期化する
    setTimeout(() => {
      setIsLikeButtonClicked(false);
      setIsDisLikeButtonClicked(false);
    }, [1000]);
  }, [clickHandler]);

  return (
    <Wrapper>
      <Card>
        <Title>お相手からのいいね！</Title>
        <MatchCard>
          {index < 4 ? (
            <StyledImg src={`/Img/${UserData[index].img}`} />
          ) : (
            <NoneUser />
          )}

          <ButtonWrapper>
            <DislikeButton onClick={() => clickHandler(index, "dislike")} />
            <LikeButton onClick={() => clickHandler(index, "like")} />
          </ButtonWrapper>
        </MatchCard>
      </Card>
    </Wrapper>
  );
};
