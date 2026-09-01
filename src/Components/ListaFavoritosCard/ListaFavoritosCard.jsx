import styles from "./ListaFavoritosCard.module.css"

function ListaFavoritosCard({cidade = "SP", nota = "5"}) {
    return (
    <div className={styles.card}>
        <div className={styles.metadeCimaCard}>
            <div className={styles.imgRestaurante}>
                <img src="https://placehold.co/150x150" alt="Imagem do Restaurante Favorito"/>
            </div>
        </div>
        <div className={styles.metadeBaixoCard}>
            <div className={styles.nome}>
                <h5>Restaurante X</h5>
            </div>
            <div className={styles.localizacao}>
                <div className={styles.local}>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>{cidade}</p>
                </div>
                <p className={styles.nota}>★ {nota} ♥</p> 
            </div>
        </div>
        <div className={styles.remover}>
            <button>Excluir</button>
        </div>
    </div>
    );
}

export default ListaFavoritosCard