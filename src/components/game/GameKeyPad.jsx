import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';

const KeyPad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 13px;
  padding: 0px 92px;
`;

const GameKeyPad = ({ keypadValue, gameLogic }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // onClick={()=>setInp(item)} 하면 되는 줄 알았는데, 다른법 있나? 고차함수말고

  return (
    <KeyPad>
      {array.map((item) => {
        return (
          <Button
            spec={SPEC.NUM_PAD}
            color={COLOR.NUM_PAD}
            key={item}
            onClick={keypadValue(item)}
          >
            {`${item}`}
          </Button>
        );
      })}
      <Button spec={SPEC.INPUT_BUTTON} color={COLOR.RED} onClick={gameLogic}>
        입력
      </Button>
    </KeyPad>
  );
};

GameKeyPad.propTypes = {
  keypadValue: propTypes.func,
  gameLogic: propTypes.func
};

export default React.memo(GameKeyPad);
