import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';

const KeyPad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  justify-items: center;
  padding: 0px 92px;
`;

const GameKeyPad = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <KeyPad>
      {array.map((item) => {
        return (
          <Button spec={SPEC.NUM_PAD} color={COLOR.NUM_PAD} key={item}>
            {`${item}`}
          </Button>
        );
      })}
    </KeyPad>
  );
};

export default GameKeyPad;
