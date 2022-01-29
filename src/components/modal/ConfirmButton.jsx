import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';

const ConfirmButton = ({ isDisabled }) => {
  console.log('ConfirmButton');
  return (
    <Button spec={SPEC.SMALL_BUTTON} color={COLOR.YELLOW} disabled={isDisabled}>
      확인
    </Button>
  );
};

ConfirmButton.propTypes = {
  isDisabled: propTypes.boolean
};

export default React.memo(ConfirmButton);
