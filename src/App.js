import { useEffect, useState } from "react";
import {
  Background,
  Bird,
  Obstacles,
  StartGame,
  StyledHeading,
  StyledHeadingDiv,
} from "./components/styled";

//Here are all the constant values
const WALL_HEIGHT = 800;
const WALL_WIDTH = 600;
const BIRD_HEIGHT = 30;
const BIRD_WIDTH = 35;
const BIRD_POSITION_LEFT = 200;
const GRAVITY = 7;
const OBJ_SPEED = 5;
const RANDOM_HEIGHT = Math.floor(Math.random() * (350 - 250)) + 250;

function App() {
  //Here is the logic for the game
  const [birdPosition, setBirdPosition] = useState(430);

  //Responsible for starting the game
  const [isStart, setIsStart] = useState(false);

  //Responsible for making the bird position inside the game
  useEffect(() => {
    let birdPositionInterval;
    if (isStart && birdPosition < WALL_HEIGHT + BIRD_HEIGHT - 60) {
      birdPositionInterval = setInterval(() => {
        setBirdPosition(birdPosition + GRAVITY);
      }, 24);
    }

    window.addEventListener("keydown", handleSpaceKey);
    return () => {
      clearInterval(birdPositionInterval);
      window.removeEventListener("keydown", handleSpaceKey);
    };
  }, [birdPosition]);

  //Responsible for making the bird fly
  const handleSpaceKey = (event) => {
    if (birdPosition < BIRD_HEIGHT) {
      return setBirdPosition(0);
    } else if (event.key === " ") {
      setIsStart(true);
      return setBirdPosition((birdPosition) => birdPosition - 80);
    }
  };

  //Repsonsible for obstacles height
  const [obsHeight, setObsHeight] = useState(200);

  //Repsonsible for obstacles movement
  const [obsLeft, setObsLeft] = useState(600);

  useEffect(() => {
    let obsPositionInterval;
    if (isStart && obsLeft >= -52) {
      obsPositionInterval = setInterval(() => {
        setObsLeft(obsLeft - OBJ_SPEED);
      }, 24);
      return () => {
        clearInterval(obsPositionInterval);
      };
    } else {
      setObsLeft(WALL_WIDTH);
      setObsHeight(RANDOM_HEIGHT);
    }
  }, [obsLeft, isStart]);

  // Responsible for Collision detection
  useEffect(() => {
    let obsTop = birdPosition >= 0 && birdPosition < obsHeight;
    let obsBottom =
      birdPosition <= WALL_HEIGHT && birdPosition >= WALL_HEIGHT - obsHeight;

    if (birdPosition >= WALL_HEIGHT - BIRD_HEIGHT) {
      setIsStart(false);
      setBirdPosition(430);
    } else if (obsLeft >= 52 && obsLeft <= 52 + 50 && (obsTop || obsBottom)) {
      console.log();
      setIsStart(false);
      setBirdPosition(430);
    }
  }, [birdPosition, obsLeft, obsHeight]);

  return (
    <Background id="background" height={WALL_HEIGHT} width={WALL_WIDTH}>
      {!isStart ? <StartGame></StartGame> : null}
      {!isStart ? (
        <StyledHeadingDiv>
          <StyledHeading>Press Space bar to start</StyledHeading>
        </StyledHeadingDiv>
      ) : null}
      <Obstacles
        height={obsHeight}
        left={obsLeft}
        top={0}
        deg={180}
      ></Obstacles>
      <Bird
        height={BIRD_HEIGHT}
        width={BIRD_WIDTH}
        top={birdPosition}
        left={BIRD_POSITION_LEFT}
      ></Bird>
      <Obstacles
        height={obsHeight}
        left={obsLeft}
        top={WALL_HEIGHT - obsHeight}
      ></Obstacles>
    </Background>
  );
}

export default App;
