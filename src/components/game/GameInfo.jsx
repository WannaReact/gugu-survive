import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const GameInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 50px);
`;

const GameInfo = ({ score, combo, round }) => {
  return (
    <>
      <GameInfoContainer>
        <div>
          <p>Score: {score}</p>
          <p>Combo: {combo}</p>
        </div>
        <p>Round: {round}</p>
      </GameInfoContainer>
    </>
  );
};

GameInfo.propTypes = {
  score: propTypes.number,
  combo: propTypes.number,
  round: propTypes.number
};

export default React.memo(GameInfo);
