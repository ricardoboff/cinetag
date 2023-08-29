import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import Container from "../../components/Container"
import FavoritosProvider from "../../contexts/Favorito"
import Rodape from "../../components/Rodape"


const PaginaBase = () => {
  return (
    <main>
        <Cabecalho />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Rodape />
    </main>
  )
}

export default PaginaBase