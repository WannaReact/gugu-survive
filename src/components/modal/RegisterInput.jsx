import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const Input = styled.input`
  width: 239px;
  height: 44px;
  border: 2px solid ${COLOR.BLACK};
  margin-bottom: 7px;
  text-align: center;
  font-size: 25px;
  &::placeholder {
    font-size: 25px;
    color: ${COLOR.PLACEHOLDER};
  }
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 482px;
    height: 67px;
    font-size: 35px;
    margin-bottom: 9px;
    &::placeholder {
      font-size: 35px;
    }
  }
`;

const RegisterInput = ({ gamerName, setGamerName, setIsDisabled }) => {
  console.log('RegisterInput');
  const onInputChange = (e) => {
    const { value } = e.target;
    setGamerName(value);
    if (value.length > 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="이름을 입력하세요"
        minLength={2}
        maxLength={8}
        value={gamerName}
        onChange={onInputChange}
      />
    </>
  );
};

RegisterInput.propTypes = {
  gamerName: propTypes.string,
  setGamerName: propTypes.func,
  setIsDisabled: propTypes.func
};

export default React.memo(RegisterInput);
