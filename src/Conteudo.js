import styled from 'styled-components';
import { Title2 } from './Titles'

function Conteudo({ title, content }) {

  return (
    <StyledSection>
      <Title2>{title}</Title2>
      {content}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  background-color: cyan;
  
`;

export default Conteudo