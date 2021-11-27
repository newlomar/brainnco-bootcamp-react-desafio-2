import { Title3, Title4 } from './Titles';
import styled from 'styled-components';

function SideBar({ links, setTitle, setContent }) {

  function mudarArtigo(item) {

    setTitle(item.title)
    setContent(item.content)

  }
  
  const listItems = links.map((item) => {
    return <li onClick={() => mudarArtigo(item)} key={item.id}><Title4>{item.title}</Title4></li>
  })
  return (
    <StyledAside>
      <Title3>Exemplo de Barra Lateral</Title3>
      <StyledUl className="article-links">{listItems}</StyledUl>
    </StyledAside>
  )
}

const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledAside = styled.aside`
  width: 50%;
  text-align: center;
  background-color: coral;
`;

export default SideBar