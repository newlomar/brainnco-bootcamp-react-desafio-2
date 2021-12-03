import styled from 'styled-components';

function Button({ anchor, kind, value }) {
  return (
    <StyledAnchor href={anchor}>
      <StyledButton 
        className={kind}
      >
        {value}
      </StyledButton>
    </StyledAnchor>
  )
}

const StyledButton = styled.button`
  margin-top: 1rem;
  background-color: steelblue;
  color: #fff;
  padding: 1rem 0.5rem;
  border-color: steelblue;
  border-radius: 1rem;
  cursor: pointer;  
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover ${StyledButton} {
    opacity: 0.7;
  }
`;


export default Button