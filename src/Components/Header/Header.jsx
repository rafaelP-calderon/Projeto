import styles from "./Header.module.css"

function Header({setTela}) {
    return (
        <header>
            <div className={styles.logo}>
                <img className={styles.imgLogo} src="src\assets\restfinderLogo.jpg" alt="Logo do Website" />
            </div>
                <nav>
                    <ul>
                        <li className={styles.inicio}><button className={styles.inicioBtn} onClick={() => setTela("inicio")}>Início</button></li>
                        <li className={styles.listaBtn}><button className={styles.listaButton} onClick={() => setTela("lista")}>Minha Lista</button></li>   
                        <li className={styles.cadastroBtn}><button className={styles.btnCor} onClick={() => setTela("cadastro")}>Cadastro</button></li>
                        <li className={styles.loginBtn}><button className={styles.btnCor} onClick={() => setTela("login")}>Login</button></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header