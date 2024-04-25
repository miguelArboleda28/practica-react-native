import "./App.css";
import { useState } from "react";
import Card from "./components/Card.jsx";
import icon from "../public/vite.svg";

function App() {
  const [numero, setNumero] = useState(0);
  return (
    <div id="container">
      <h1>Hola</h1>
      <Card icon={icon} />
      <h1>{numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>Contador</button>
    </div>
  );
}

export default App;
