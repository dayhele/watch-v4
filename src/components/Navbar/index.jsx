import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarList>
        <S.ListItem active>
          <S.Item href="#" >
            Início
          </S.Item>
        </S.ListItem>
        <S.ListItem active> 
          <S.Item href="#" >
            Conheça a Watch
          </S.Item>
        </S.ListItem>
      </S.NavbarList>
      <S.NavbarList>
        <S.ListItem>
          <S.Item href="#">Entrar via SMS</S.Item>
        </S.ListItem>
        <S.ListItem>
          <S.Item href="#">Entrar</S.Item>
        </S.ListItem>
      </S.NavbarList>
    </S.Navbar>
  );
};

export default Navbar;
