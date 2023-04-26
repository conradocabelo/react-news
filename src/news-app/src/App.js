import './App.css';
import AppHeader from './components/header/header';
import AppFooter from './components/footer/footer';
import AppHome from './components/home/home';

import React, {useState } from 'react';

function App() {
  const [dadosPesquisa, setDados] = useState({
    language : "pt",
    category : "general",
    country: "br"
  });

  const changeCategory = (category) => {
     var dados = {
      language: dadosPesquisa.language,
      category: category,
      country: dadosPesquisa.country
     };

     setDados(dados);
     console.log("dados setados", dados)
  }

  return (
    <div className="App">
      <header className="App-header">
          <AppHeader changeCategory={changeCategory}></AppHeader>
      </header>
      <main>
          <AppHome Data={dadosPesquisa} ></AppHome>
      </main>
      <footer className="App-footer">
          <AppFooter></AppFooter>
      </footer>
    </div>
  );
}

export default App;
