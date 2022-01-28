import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import SPEC from '../../constants/spec';
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

const P = styled.p`
  font-size: 15px;
  margin-bottom: 13px;
  @media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 20px;
    margin-bottom: 21px;
  }
`;

const RegisterModalContent = () => {
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const checkButton = useRef();
  const onInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
    if (value.length > 1) {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <Input
        type="text"
        name="name"
        placeholder="이름을 입력하세요"
        minLength={2}
        maxLength={8}
        value={input}
        onChange={onInputChange}
      />
      <P>2~8글자로 입력해 주세요</P>
      <Link to="/play">
        <Button
          ref={checkButton}
          spec={SPEC.SMALL_BUTTON}
          color={COLOR.YELLOW}
          disabled={isDisabled}
        >
          확인
        </Button>
      </Link>
    </>
  );
};

export default RegisterModalContent;
