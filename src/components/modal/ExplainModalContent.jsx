import { Link } from 'react-router-dom';
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';

const ExplainModalContent = () => {
  return (
    <>
      <h2>게임 설명</h2>
      <p>
        우리의 유해조수 비둘기 구구를 통구이가 될 운명에서 구해주세요! <br />{' '}
        두뇌 풀가동!
      </p>
      <h2>게임 규칙</h2>
      <p>게임 시작 시 제한시간 30초가 부여됩니다.</p>
      <p>
        구구단 문제를 하나 맞출 때마다 제한 시간 3초가 추가되고p, 틀릴 때마다
        1초가 감소합니다.
      </p>
      <p>10문제마다 다음 라운드로 넘어가며, 난이도가 점점 높아집니다p.</p>
      <Link to="/play">
        <Button spec={SPEC.SMALL_BUTTON} color={COLOR.RED}>
          닫기
        </Button>
      </Link>
    </>
  );
};

export default ExplainModalContent;
