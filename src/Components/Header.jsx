import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img className={styles.imgLogo} src="https://placehold.co/220x120" alt="Logo do Website" />
            </div>
                <nav>
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Localizar Restaurante</a></li>
                        <li><a href="">Sobre</a></li>
                        <li className={styles.cadastroBtn}><a className={styles.btnCor} href="">Cadastro</a></li>
                        <li className={styles.loginBtn}><a className={styles.btnCor} href="">Login</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header