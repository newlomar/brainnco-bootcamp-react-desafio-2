import styled from 'styled-components';
import { Title1 } from "./Titles"
import Button from "./Button"

function Header() {
  return (
    <StyledHeader>
      <Title1 children="Isso é uma introdução"/>
      <Button anchor="#main" value="Vá para o conteúdo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: tomato;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Header