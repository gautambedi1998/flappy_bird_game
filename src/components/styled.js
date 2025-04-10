import styled from "styled-components";
import "./app.css";

export const Background = styled.div`
  background-image: url("./assets/background-night.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 2px solid black;
  position: relative;
`;

export const Bird = styled.div`
  background-image: url("./assets/yellowbird-upflap.png");
  background-repeat: no-repeat;
  background-size: ${(props) => props.width}px ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export const StartGame = styled.div`
  background-image: url("./assets/message.png");
  width: 300px;
  height: 800px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  top: 150px;
  left: 150px;
`;

export const StyledHeading = styled.h1`
  color: white;
  font-size: 30px;
`;

export const StyledHeadingDiv = styled.div`
  position: relative;
  left: 130px;
`;

export const Obstacles = styled.div`
  position: absolute;
  background-image: url("./assets/pipe-green.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 52px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: rotate(${(props) => props.deg}deg);
`;
