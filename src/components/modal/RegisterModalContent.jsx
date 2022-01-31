import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterInput from './RegisterInput';
import ConfirmButton from './ConfirmButton';
import MEDIA_QUERY_END_POINT from '../../constants/media-query';

const P = styled.p`
  font-size: 15px;
  margin-bottom: 13px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 20px;
    margin-bottom: 21px;
  }
`;

const RegisterModalContent = () => {
  const [gamerName, setGamerName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const saveGamerName = useCallback(() => {
    localStorage.setItem('gamerName', gamerName);
  });

  return (
    <>
      <RegisterInput
        setIsDisabled={setIsDisabled}
        gamerName={gamerName}
        setGamerName={setGamerName}
      />
      <P>2~8자의 한글, 영문, 숫자 가능</P>
      <Link to="/play" onClick={saveGamerName}>
        <ConfirmButton isDisabled={isDisabled}>확인</ConfirmButton>
      </Link>
    </>
  );
};

export default RegisterModalContent;
