import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from './background.png';

const MAX_LEVEL = 100;
const startLevel =
  Number(localStorage.getItem('level')) > MAX_LEVEL
    ? MAX_LEVEL
    : Number(localStorage.getItem('level'));

const App = () => {
  const [level, setLevel] = useState(startLevel);
  const [progress, setProgress] = useState((level / MAX_LEVEL) * 100);

  const handleUpgradeClick = () => {
    if (level < MAX_LEVEL) {
      setProgress(((level + 1) / MAX_LEVEL) * 100);
      setLevel(level + 1);
      localStorage.setItem('level', level + 1);
    }
  };
  const handleDowngradeClick = () => {
    if (level > 0) {
      setProgress(((level - 1) / MAX_LEVEL) * 100);
      setLevel(level - 1);
      localStorage.setItem('level', level - 1);
    }
  };

  return (
    <BackgroundContainer>
      <Container>
        <LevelContainer>
          <LevelNumber>{level}</LevelNumber>
          <LevelTitle>Уровень</LevelTitle>
        </LevelContainer>
        <Progress>
          <ProgressFill progress={`${progress}%`}></ProgressFill>
        </Progress>
        <UpgradeButton onClick={handleUpgradeClick}>Прокачать</UpgradeButton>
        <DowngradeButton onClick={handleDowngradeClick}>
          Откачать
        </DowngradeButton>
      </Container>
    </BackgroundContainer>
  );
};

export default App;

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #0f67a7;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 475px;
  background: rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(50px);
  border-radius: 30px;
  padding: 50px;
  color: #fff;
`;

const LevelContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 10px;
  margin-bottom: 25px;
  user-select: none;
`;

const LevelNumber = styled.h1`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
`;
const LevelTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
`;

const Progress = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 30px;
  padding: 5px;
  height: 20px;
  margin-bottom: 25px;
`;

const ProgressFill = styled.div`
  /* width: 100%; */
  width: ${(props) => props.progress};
  border-radius: 30px;
  height: 100%;
  margin-bottom: 25px;
  transition: all 0.5s;
  background: linear-gradient(94.4deg, #03efaf 3.15%, #0b2be7 91.57%);
  border-radius: 22px;
`;

const Button = styled.div`
  display: grid;
  place-items: center;
  padding: 15px;
  border-radius: 22px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 24px;
  transition: all 0.5s, transform 0.1s ease-in-out;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const UpgradeButton = styled(Button)`
  background-image: linear-gradient(to right, #210368, #0b1dea, #02f9ac);
  padding: 50px;
  margin-bottom: 25px;
  background-size: 300% 100%;

  &:hover {
    background-position: 100% 0;
  }
`;

const DowngradeButton = styled(Button)`
  background: rgba(11, 45, 230, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(11, 45, 230, 0.6);
  }
`;
