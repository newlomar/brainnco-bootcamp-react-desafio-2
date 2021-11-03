import SideBar from './SideBar'
import Conteudo from './Conteudo'

function Main({ id }) {

  const arrayDeObjetos = [
    {
      id: 1,
      title: 'Artigo-1',
      content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat fugit repudiandae possimus quos, iure ex sunt corporis vero eos?</p>
    },
    {
      id: 2,
      title: 'Artigo-2',
      content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis error repellendus esse quae, cum, ducimus nam ratione commodi quisquam atque doloribus placeat aspernatur blanditiis reprehenderit ipsa fugiat ullam voluptatibus.</p>
    },
    {
      id: 3,
      title: 'Artigo-3',
      content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odio atque eos, ex sapiente, quibusdam totam quam quod ullam earum deserunt culpa vitae modi rem cum cumque deleniti vel veniam. Sit labore hic mollitia illum maiores minus impedit nobis eius?</p>
    }
  ]

  return (
    <main id={id}>
      <SideBar />
      <Conteudo />
    </main>
  )
}

export default Main