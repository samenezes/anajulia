import './App.css';  // Importa o arquivo de estilo CSS chamado 'App.css'.
import Header from './components/header/Header'
import Container from './components/container'
import Footer from './components/footer/Footer'
import React, { useState, useEffect } from 'react';  // Importa a biblioteca 'react' e seus hooks 'useState' e 'useEffect'.

function App() {  // Define o componente funcional principal chamado 'App'.
/* 
function category() {
  fetch(': https://opentdb.com/api.php?amount=30&category=15')  
    .then(response => response.json())  
    .then(data => {
      var category = document.querySelector("#category");  
      category.innerHTML = `${data.category}`;  
    });
} */

  return (
    <>

     {/*  <div>
        <figure>
          <figcaption id="category">
            
            </figcaption>  
        </figure>
      </div>

      <tr key={index}>
      <td>{country.category}</td>  
      </tr> */}

      <Container />
      <Header />
      <Footer />

    </>
  )
}

export default App;  // Exporta o componente 'App' como a exportação padrão.
