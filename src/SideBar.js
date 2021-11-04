import { Title3, Title4 } from './Titles'

function SideBar({ links, setTitle, setContent }) {

  function mudarArtigo(item) {

    setTitle(item.title)
    setContent(item.content)

  }
  
  const listItems = links.map((item) => {
    return <li onClick={() => mudarArtigo(item)} key={item.id}><Title4>{item.title}</Title4></li>
  })
  return (
    <aside>
      <Title3>Exemplo de Barra Lateral</Title3>
      <ul className="article-links">{listItems}</ul>
    </aside>
  )
}

export default SideBar