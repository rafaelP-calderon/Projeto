import styles from "./Login.module.css";

function Login({ setTela }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const senha = form.senha.value;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.voltar}>
        <button
          type="button"
          className={styles.btnVoltar}
          onClick={() => setTela("inicio")}
        >
          <i className={`fas fa-chevron-left ${styles.setaVoltar}`}></i> Voltar
        </button>
      </div>
      <div className={styles.infos}>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input className={styles.inputEmail} name="email" type="email" />
        </div>
        <div className={styles.senha}>
          <label htmlFor="senha">Senha</label>
          <input className={styles.inputSenha} name="senha" type="password" />
          {/* <i
            onClick={() => setSenhaVisivel(!senhaVisivel)}
            className={`far ${senhaVisivel ? "fa-eye" : "fa-eye-slash"} ${styles.olho}`}
          ></i> */}
        </div>
      </div>
      <div className={styles.enviarInfos}>
        <div className={styles.btnEnviar}>
          <button type="submit">Autenticar</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
