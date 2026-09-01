import { useState } from "react"
import Header from "./Components/Header/Header.jsx"
import Main from "./Components/Main/Main.jsx"
import Cadastro from "./Components/Cadastro/Cadastro.jsx"
import RestauranteCard from "./Components/RestauranteCard/RestauranteCard.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import "./reset.css"
import "./App.css"

function App() {

  const [tela, setTela] = useState("inicio")

  return (
    <div className="app">
      <Header setTela={setTela}/>
      {tela === "inicio" && (<><Main /> <RestauranteCard /> </>)}
      {tela === "cadastro" && <Cadastro />}
      <Footer />
    </div>
  )
}

export default App
