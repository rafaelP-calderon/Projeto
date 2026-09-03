import styles from "./RestauranteCard.module.css";

function RestauranteCard({ imagem, nome, local, nota, descricao, avancar, voltar }) {
  return (
    <div className={styles.carrosselRestaurantes}>
      <div className={styles.imagem}>
        <i onClick={() => voltar()}
          className={`fas fa-chevron-left ${styles.setaVolta}`}
        ></i>
        <img src={imagem} alt="Imagem do restaurante descrito" />
        <i onClick={() => avancar()}
          className={`fas fa-chevron-right ${styles.setaAvancar}`}
        ></i>
      </div>
      <div className={styles.infos}>
        <div className={styles.nomeAvaliacao}>
          <div className={styles.nome}>
            <h2>{nome}</h2>
            <p>{local}</p>
          </div>
          <div className={styles.avaliacao}>
            <p>{nota}</p>
          </div>
        </div>
        <div className={styles.descricao}>
          <p>{descricao}</p>
        </div>
        <div className={styles.adicionarLista}>
          <button className={styles.btnLista}>Lista de Desejos +</button>
        </div>
      </div>
    </div>
  );
}

export default RestauranteCard;
