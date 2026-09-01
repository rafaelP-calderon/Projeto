import styles from "./ListaFavoritosMain.module.css"
import ListaFavoritosCard from "../ListaFavoritosCard/ListaFavoritosCard"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

function ListaFavoritosMain() {
    return (
        <div className={styles.container}>
            <ListaFavoritosCard cidade="Rio De Janeiro" nota="4.8"/>
            <ListaFavoritosCard cidade="São Paulo" nota="4.9"/>
            <ListaFavoritosCard cidade="Bahia" nota="4.5"/>
            <ListaFavoritosCard cidade="Espírito Santo" nota="4.2"/>
            <ListaFavoritosCard cidade="Salvador" nota="3.4"/>
            <ListaFavoritosCard cidade="Fortaleza" nota="3.1"/>
            <ListaFavoritosCard cidade="Manaus" nota="5"/>
            <ListaFavoritosCard cidade="Minas Gerais" nota="3.8"/>
        </div>
    );
}

export default ListaFavoritosMain