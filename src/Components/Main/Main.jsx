import styles from "./Main.module.css"
import ListaRestaurantes from "../ListaRestaurantes/ListaRestaurantes"

function Main() {
    return (
        <main>
            <div className={styles.boasVindas}> 
                <h1 className={styles.titulo}>
                    Bem Vindo ao <span>RestFinder</span>
                </h1>
                <p className={styles.desc}>Aqui você encontra restaurantes incríveis espalhados pelo Brasil, conhece suas histórias e salva seus favoritos.</p>
            </div>
            <ListaRestaurantes />
        </main>
    )
}

export default Main

