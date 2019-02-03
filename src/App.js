import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




/*
  Notre 1er composant Homepage.
  Le nom du composant doit toujous être écrit avec la première lettre en majuscule.
  Si ce n'est le cas, React interprète ce composant comme une balise html et sera restituée en tant que telle dans le DOM.
  Une erreur sera soulevée dans la console sans toutefois bloquer l'application.
  Illustration de l'erreur avec un composant déclaré en homepage au lieu de Homepage : 
  index.js:1446 Warning: The tag <homepage> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
    in homepage (at App.js:50)
    in div (at App.js:35)
    in App (at src/index.js:7)
*/

const Homepage = () => (  //Syntax ES6 avec arrow function
    <h2>Je suis le composant Homepage</h2>
  )
;

/* ES5 syntax :

function Homepage (){
  return  <main><h2>Je suis le composant Homepa</h2></main>
}

*/

class App extends Component {
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

{/* Notre Homepage composant insérer ici */}
        <Homepage />
      </div>
    );
  }
}

export default App;
