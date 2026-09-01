import styles from "./Cadastro.module.css";

function Cadastro({ setTela }) {
  function handleSubmit(event) {
    event.preventDefault();

    const letras = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    let contNome = 0;
    let contSobrenome = 0;

    const form = event.target;
    const nome = form.nome.value.toLowerCase();
    const sobrenome = form.sobrenome.value.toLowerCase();
    const email = form.email.value;
    const cpf = form.cpf.value;
    const dtNasc = form.dtNasc.value;

    const nascimento = new Date(dtNasc);
    const hoje = new Date();

    for (let i = 0; i < nome.length; i++) {
      let caracterNome = nome[i];
      if (!letras.includes(caracterNome)) {
        contNome++;
      }
    }

    for (let i = 0; i < sobrenome.length; i++) {
      let caractersobrenome = sobrenome[i];
      if (!letras.includes(caractersobrenome)) {
        contSobrenome++;
      }
    }

    if ((contNome > 0 || contSobrenome > 0) || (nome.length < 3 || sobrenome.length < 2)) {
      alert("Utilize apenas letras para preencher o nome e sobrenome e o tamanho mínimo!");
      return;
    }

    if (!email.includes(".")) {
      alert("Insira um domínio de email válido!");
      return;
    }

    if (cpf.length < 11) {
      alert("Insira um CPF válido!");
      return;
    }

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (hoje.getMonth() < nascimento.getMonth()) {
      idade = idade - 1;
    } else if (hoje.getMonth() === nascimento.getMonth()) {
      if (hoje.getDate() < nascimento.getDate()) {
        idade = idade - 1;
      }
    }

    if (idade < 16) {
      alert("A idade mínima é 16 anos!");
      return;
    }

    if (
      nome === "" ||
      sobrenome === "" ||
      email === "" ||
      cpf === "" ||
      dtNasc === ""
    ) {
      alert("Preencha os campos corretamente!");
    } else {
      alert("Cadastro realizado com sucesso!");
    }
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
        <div className={styles.nomeSobrenome}>
          <div className={styles.nome}>
            <label htmlFor="nome">Nome</label>
            <input className={styles.inputNome} name="nome" type="text" />
          </div>
          <div className={styles.sobrenome}>
            <label htmlFor="sobrenome">Sobrenome</label>
            <input className={styles.sobrenome} name="sobrenome" type="text" />
          </div>
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input className={styles.email} name="email" type="email" />
        </div>
        <div className={styles.cpf}>
          <label htmlFor="cpf">CPF</label>
          <input className={styles.cpf} name="cpf" type="text" />
        </div>
        <div className={styles.dtNasc}>
          <label htmlFor="dtNascimento">Data de Nascimento</label>
          <input className={styles.dtNasc} name="dtNasc" type="date" />
        </div>
      </div>
      <div className={styles.enviarInfos}>
        <div className={styles.btnEnviar}>
          <button type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
  );
}

export default Cadastro;
