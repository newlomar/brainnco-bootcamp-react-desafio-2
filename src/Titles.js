import styled from 'styled-components';

function Title1({ children }) {
  return <StyledH1>{children}</StyledH1>
}

function Title2({ children }) {
  return <h2>{children}</h2>
}

function Title3({ children }) {
  return <h3>{children}</h3>
}

function Title4({ children }) {
  return <h4>{children}</h4>
}

function Title5({ children }) {
  return <h5>{children}</h5>
}

function Title6({ children }) {
  return <h6>{children}</h6>
}

const StyledH1 = styled.h1`
  margin: 0;
`;

export {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6
}