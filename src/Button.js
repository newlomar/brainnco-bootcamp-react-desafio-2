import styled from 'styled-components';

function Button({ anchor, kind, value }) {
  return (
    <StyledAnchor href={anchor}>
      <button 
        className={kind}
      >
        {value}
      </button>
    </StyledAnchor>
  )
}

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #fff;
`;

export default Button