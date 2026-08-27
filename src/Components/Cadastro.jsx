import styles from "./Cadastro.module.css"

function Cadastro() {
    <form action="">
        <div className={styles.infos}>
            <div className={styles.nome}>
                <label htmlFor="">Nome</label>
                <input type="text" />
            </div>
            <div className={styles.sobrenome}>
                <label htmlFor="">Sobrenome</label>
                <input type="text" />
            </div>
            <div className={styles.email}>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div className={styles.cpf}>
                <label htmlFor="">CPF</label>
                <input type="text" />
            </div>
            <div className={styles.dtNasc}>
                <label htmlFor="">Data de Nascimento</label>
                <input type="text" />
            </div>
        </div>
        <div className={styles.enviarInfos}>
            <div className={styles.btnEnviar}>
                <button>Cadastrar</button>
            </div>
        </div>
    </form>
}

export default Cadastro