import { Title1 } from "./Titles"
import Button from "./Button"

function Header() {
  return (
    <header>
      <Title1 children="Isso é uma introdução"/>
      <Button anchor="#main" kind="primary" value="Vá para o conteúdo" />
    </header>
  )
}

export default Header