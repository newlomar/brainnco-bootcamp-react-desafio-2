import { Title2 } from './Titles'

function Conteudo({ title, content }) {

  return (
    <section>
      <Title2>{title}</Title2>
      {content}
    </section>
  )
}

export default Conteudo