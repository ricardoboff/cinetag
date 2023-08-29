import { useFavoritoContext } from '../../contexts/Favorito'
import styles from './card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom'

const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt='favoritar filme'
                className={styles.favoritar}
                onClickCapture={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>
    )
}

export default Card;