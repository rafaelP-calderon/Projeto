import styles from "./Components/Login/Login.module.css"

function Login() {
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
                  <input className={styles.email} name="email" type="email" />
                </div>
                <div className={styles.senha}>
                  <label htmlFor="senha">Senha</label>
                  <input className={styles.senha} name="senha" type="senha" />
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

export default Login