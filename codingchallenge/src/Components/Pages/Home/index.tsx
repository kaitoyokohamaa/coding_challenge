import React, { useEffect, useState } from "react";
import { Card } from "../../Organisms/Card";
import { LikeButton } from "../../Atoms/LikeButton";
import { DislikeButton } from "../../Atoms/DislikeButton";
import { MatchCard } from "../../Organisms/MatchCard";
import styled, { keyframes } from "styled-components";
import UserData from "../../../data.json";
import debounce from "lodash/debounce";
import { HeartTwoTone } from "@ant-design/icons";
export const Home = () => {
  const [index, setIndex] = useState<number>(0);
  const [isLikeButtonClicked, setIsLikeButtonClicked] = useState<boolean>(
    false
  );
  const [isDisLikeButtonClicked, setIsDisLikeButtonClicked] = useState<boolean>(
    false
  );

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
  const Wrapper = styled.div``;
  const ImgWrapper = styled.div`
    position: relative;
    animation: ${isLikeButtonClicked && swipeRight}
      ${isDisLikeButtonClicked && swipeLeft}　2.0s forwards;
    animation-timing-function: ease-in;
    -webkit-animation-timing-function: ease-in;
    -webkit-animation: ${isLikeButtonClicked && swipeRight}
      ${isDisLikeButtonClicked && swipeLeft} 1s forwards;
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
    width: 100%;
    height: 400px;
    border-radius: 20px;
  `;
  const Circle = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #43f381;
    margin-right: 4px;
  `;
  const Name = styled.p`
    position: absolute;
    bottom: 70px;
    left: 20px;
    color: #fff;
  `;
  const Age = styled.span`
    color: #fff;
    margin-left: 10px;
  `;
  const Love = styled.p`
    position: absolute;
    bottom: 78px;
    left: 110px;
    color: #fff;
    margin-left: 10px;
    font-size: 10px;
  `;
  const Introduction = styled.p`
    position: absolute;
    bottom: 24px;
    color: #77c5e4;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px 0px;
    font-size: 12px;
    text-align: center;
    width: 86%;
    left: 0;
    right: 0;
    margin: auto;
  `;
  // 何度もクリックするとバグが生ずるのでdebounceを利用
  const clickHandler = debounce((i: number, type: string) => {
    const currentNumber = i + 1;

    if (type === "like") {
      setIsLikeButtonClicked(true);
    } else if (type === "dislike") {
      setIsDisLikeButtonClicked(true);
    }
    // 次の画像に移るのをアニメーションが終わったらにする
    setTimeout(() => {
      setIndex(currentNumber);
    }, [1000]);

    if (i > 3) {
      alert("ユーザーがいません！リロードしてください");
    }
  }, 500);
  useEffect(() => {
    //アニメーションを初期化する
    setTimeout(() => {
      setIsLikeButtonClicked(false);
      setIsDisLikeButtonClicked(false);
    }, [1000]);
  }, [isLikeButtonClicked, isDisLikeButtonClicked]);

  return (
    <Wrapper>
      <Card>
        <Title>お相手からのいいね！</Title>
        <MatchCard>
          {index < 4 ? (
            <ImgWrapper>
              <StyledImg
                src={`/Img/${UserData[index].img}`}
                alt={UserData[index].name}
              />
              <Name>
                <Circle />
                {UserData[index].name}
                <Age>{UserData[index].age}歳</Age>
              </Name>
              <Love>
                <HeartTwoTone twoToneColor="#eb2f96" />
                {UserData[index].love}
              </Love>
              <Introduction>{UserData[index].introduction}</Introduction>
            </ImgWrapper>
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
