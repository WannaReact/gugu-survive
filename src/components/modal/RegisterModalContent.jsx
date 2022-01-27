import { Link } from "react-router-dom";
import Button from "../Button";
import SPEC from "../../constants/spec";
import COLOR from "../../constants/color";

const RegisterModalContent = () => {
  return (
  <>
    <input type="text" placeholder="이름을 입력하세요" />
    <p>2~8글자로 입력해 주세요</p>
    <Link to='/play'>
      <Button spec={SPEC.SMALL_BUTTON} color={COLOR.YELLOW}>확인</Button>
    </Link>
  </>
  )
};

export default RegisterModalContent;
