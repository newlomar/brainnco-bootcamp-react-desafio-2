import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'
import { createGlobalStyle } from 'styled-components';
import './style.css'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  #root {
    width: 100%;
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu />
      <Main id="main"/>
      <Footer />
    </>
  )
}

export default App