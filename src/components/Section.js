import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Wrap bgImage = {props.carsDetails.backgroundImg}>
      <ItemText>
        <h1>{props.carsDetails.title}</h1>
        <p>{props.carsDetails.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.carsDetails.leftBtnText}</LeftButton>
          {
            props.carsDetails.rightBtnText &&
            <RightButton>{props.carsDetails.rightBtnText}</RightButton>
          }          
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width : 768px){
    flex-direction : column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.90;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin-left: 8px;
  @media (max-width : 768px){
    margin-bottom : 10px;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: rgb(224 226 232 / 83%);
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation : animateDown infinite 1.5s;
  overflow-X : hidden;
`;

const Buttons = styled.div``