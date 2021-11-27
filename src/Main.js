import { useState } from 'react/'
import SideBar from './SideBar'
import Conteudo from './Conteudo'
import styled from 'styled-components';

function Main({ id }) {

  const arrayDeObjetos = [
    {
      id: 1,
      title: 'Artigo Aleatorio',
      content: <p>Esse artigo foi criado apenas com intuito de servir de texto de molde para eu entender o funcionamento do React, realizando, assim, o exercício 2 do desafio do bootcamp da Brainn liderado pelo Fernando Daciuk</p>
    },
    {
      id: 2,
      title: 'Continuação da Aleatoriedade',
      content: <p>Não foi escolha minha escrever esses artigos na mão, eu tinha utilizado os emmets lorem20, lorem30 e lorem40, porém li no texto do desafio que deveríamos usar nossa criativdade, então comecei a escrever esses parágrafos sem muita pretenção de respeita a norma culta da língua Portuguesa.</p>
    },
    {
      id: 3,
      title: 'Artigo 3',
      content: <p>Será que é possível escrever palavras aletórias e mesmo assim parecer que faz sentido? Quando começa indo para a volta dos que foram ou não ainda assim pode-se dizer que deve-se alterar a resolução da questão morfológica abstrata da abstração conduinte da energia paralela ou ortogonal do caso abstrato daquela questão aleatória</p>
    }
  ]

  const [title, setTitle] = useState(arrayDeObjetos[0].title)
  const [content, setContent] = useState(arrayDeObjetos[0].content)

  return (
    <StyledMain id={id}>
      <SideBar setTitle={setTitle} setContent={setContent} links={arrayDeObjetos} />
      <Conteudo links={arrayDeObjetos} title={title} content={content} />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  background-color: cornflowerblue;
  display: flex;
  padding: 1rem
`;

export default Main