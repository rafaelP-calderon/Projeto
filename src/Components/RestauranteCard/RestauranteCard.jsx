import styles from "./RestauranteCard.module.css";

function RestauranteCard() {
  return (
    <div className={styles.carrosselRestaurantes}>
      <div className={styles.imagem}>
        <i className={`fas fa-chevron-left ${styles.setaVolta}`}></i>
        <img
          src="https://placehold.co/500x200"
          alt="Imagem do restaurante descrito"
        />
        <i className={`fas fa-chevron-right ${styles.setaAvancar}`}></i>
      </div>
      <div className={styles.infos}>
        <div className={styles.nomeAvaliacao}>
          <div className={styles.nome}>
            <h2>Restaurante X</h2>
            <p>Guarulhos, SP</p>
          </div>
          <div className={styles.avaliacao}>
            <p>★ 4.5/5</p>
          </div>
        </div>
        <div className={styles.descricao}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            hic quibusdam nam fugit eaque magnam? Sunt numquam quaerat nemo iure
            fugiat, commodi enim quos ad, animi incidunt quod quisquam velit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quisquam consectetur nemo voluptatibus doloremque libero assumenda dolore odio explicabo fugit vitae molestias fuga saepe, dicta perferendis, nulla, cum repudiandae deserunt.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, neque. Vel voluptatem optio quaerat itaque! Vel, dicta optio dignissimos mollitia illo sunt alias! Eveniet enim fugit laudantium suscipit incidunt culpa!
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestauranteCard;
