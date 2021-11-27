import styled from "styled-components"

function Menu() {
  return (
    <StyledNav>
      <StyledUl>
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Contato</li>
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

export default Menu