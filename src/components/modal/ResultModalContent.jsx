import { Link } from 'react-router-dom';
import chicken from '../../assets/images/meat.png'
import Button from '../Button';
import SPEC from '../../constants/spec';
import COLOR from '../../constants/color';

const ResultModalContent = () => {
  return (
  <>
    <h2>Game Over</h2>
    <img src={chicken}></img>
    <span>1234 점</span>
    <div>
      <Link to='/play'>
        <Button spec={SPEC.SMALL_BUTTON} color={COLOR.YELLOW}>다시하기</Button>
      </Link>
      <Link to='/leaderboard'>
        <Button spec={SPEC.SMALL_BUTTON} color={COLOR.BLUE}>순위표</Button>
      </Link>
    </div>
  </>
  );
};

export default ResultModalContent;
