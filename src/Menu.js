import styled from "styled-components"

function Menu() {
  return (
    <StyledNav>
      <StyledUl>
        <li>Inicio</li>
        <StyledLi>Sobre</StyledLi>
        <StyledLi>Contato</StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  background-color: #ff0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;

const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledLi = styled.li`
  margin-left: 1em;
`;

export default Menu