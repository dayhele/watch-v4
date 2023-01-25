import * as S from "./styles";
import LogoWatch from "../../assets/img/logo-watch-white.png";

const Home = (props) => {
    return (
        <S.HeaderWrapper>
            <S.Logo src={LogoWatch} />
            {props.children}
        </S.HeaderWrapper>
    );
}

export default Home;
