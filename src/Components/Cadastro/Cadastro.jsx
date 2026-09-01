import { useEffect, useState } from "react";
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

    const simbolos = ["!", "@", "#", "$", "%", "&", "*"];

    let contNome = 0;
    let contSobrenome = 0;
    let contSenha = 0;

    const form = event.target;
    const nome = form.nome.value.toLowerCase();
    const sobrenome = form.sobrenome.value.toLowerCase();
    const email = form.email.value;
    const cpf = form.cpf.value;
    const dtNasc = form.dtNasc.value;
    const senha = form.senha.value;

    if (
      nome === "" ||
      sobrenome === "" ||
      email === "" ||
      cpf === "" ||
      dtNasc === "" ||
      senha === ""
    ) {
      alert("Preencha os campos corretamente!");
      return;
    }

    const nascimento = new Date(dtNasc);
    const hoje = new Date();

    for (let i = 0; i < nome.length; i++) {
      let caracterNome = nome[i];
      if (!letras.includes(caracterNome)) {
        contNome++;
      }
    }

    for (let i = 0; i < sobrenome.length; i++) {
      let caracterSobrenome = sobrenome[i];
      if (!letras.includes(caracterSobrenome)) {
        contSobrenome++;
      }
    }

    if (
      contNome > 0 ||
      contSobrenome > 0 ||
      nome.length < 3 ||
      sobrenome.length < 2
    ) {
      alert(
        "Utilize apenas letras para preencher o nome e sobrenome e o tamanho mínimo!",
      );
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

    if (senha.length < 6) {
      alert("A senha deve ter 6 ou mais caractéres!");
      return;
    }

    for (let j = 0; j < senha.length; j++) {
      if (simbolos.includes(senha[j])) {
        contSenha++;
      }
    }

    if (contSenha === 0) {
      alert("A senha deve conter caractéres especiais!");
      return;
    }

    setCadastroRealizado(true);
  }
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [cadastroRealizado, setCadastroRealizado] = useState(false);

  useEffect(() => {
    if (cadastroRealizado) {
      const timer = setTimeout(() => {
        setCadastroRealizado(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [cadastroRealizado]);
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
            <input className={styles.inputSobrenome} name="sobrenome" type="text" />
          </div>
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input className={styles.inputEmail} name="email" type="email" />
        </div>
        <div className={styles.cpfNasc}>
          <div className={styles.cpf}>
            <label htmlFor="cpf">CPF</label>
            <input className={styles.inputCpf} name="cpf" type="text" />
          </div>
          <div className={styles.dtNasc}>
            <label htmlFor="dtNascimento">Data de Nascimento</label>
            <input className={styles.inputDtNasc} name="dtNasc" type="date" />
          </div>
        </div>
        <div className={styles.senha}>
          <label htmlFor="senha">Senha</label>
          <input
            className={styles.inputSenha}
            name="senha"
            type={senhaVisivel ? "text" : "password"}
          />
          <i
            onClick={() => setSenhaVisivel(!senhaVisivel)}
            className={`far ${senhaVisivel ? "fa-eye" : "fa-eye-slash"} ${styles.olho}`}
          ></i>
        </div>
      </div>
      <div className={styles.enviarInfos}>
        <div className={styles.btnEnviar}>
          <button type="submit">Cadastrar</button>
        </div>
      </div>
      <div
        className={`${styles.card} ${cadastroRealizado ? styles.mostrar : ""}`}
      >
        <p>Cadastro realizado com sucesso!</p>
      </div>
    </form>
  );
}

export default Cadastro;
