import React from "react";
import ListaDeNotas from "./components/ListaDeNotas.jsx";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
