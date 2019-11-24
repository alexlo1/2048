import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './components/Board.jsx';
import { initValues, canSlideTiles, slideTiles, generateNewTile } from './helpers/gameHelpers';

const initialValues = initValues();

const AppContainer = ({ className, children, onKeyDown }) => (
  <div
    className={className}
    tabIndex="0"
    onKeyDown={onKeyDown}
  >
    {children}
  </div>
);

const StyledAppContainer = styled(AppContainer)`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const InfoContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const Score = ({ className, score }) => (
  <div className={className}>Score: {score}</div>
);

const StyledScore = styled(Score)`
  margin: 10px;
  line-height: 50px;
  color: white;
  font-size: 20px;
`;

const StyledButton = styled.button`
  width: 180px;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 10px;
  background: #282c34;
  color: white;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background: white;
    color: #282c34;
  }
`;

const App = () => {
  const [values, setValues] = useState(initialValues);
  const [score, setScore] = useState(0);

  const updateValuesAndScore = (direction) => {
    if (canSlideTiles(values, direction)) {
      let newValues = [...values];
      let newScore = score;
      [newValues, newScore] = slideTiles(newValues, newScore, direction);
      newValues = generateNewTile(newValues);

      setScore(newScore);
      setValues(newValues);
    }
  };

  const pressKey = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        updateValuesAndScore(e.key.slice(5).toLowerCase());
        return;
      default:
    };
  };

  return (
    <StyledAppContainer onKeyDown={e => pressKey(e)}>
      <InfoContainer>
        <StyledScore score={score} />
        <StyledButton
          onClick={() => {
            setValues(initValues());
            setScore(0);
          }}
        >
          New Game
        </StyledButton>
      </InfoContainer>
      <Board values={values} />
    </StyledAppContainer>
  );
};

export default App;
