import { useEffect, useState } from "react";
import "./App.css";
import SuperheroForm from "./components/superheroForm";

function SuperheroDetails(props) {
  console.log(props);
  const superhero = props.superhero;
  const backgroundStyle = { background: superhero.color };
  return (
    <li>
      <div style={backgroundStyle}>
        <h2>{superhero.name}</h2>
        <p>Alter Ego: {superhero.alterEgo}</p>
        <p>Power: {superhero.power}</p>
        <p>Home City: {superhero.homeCity}</p>
      </div>
    </li>
  );
}
function App() {
  const [superheroes, setSuperheroes] = useState();

  const getSuperheroes = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setSuperheroes(data);
  };

  useEffect(() => {
    getSuperheroes();
  }, []);

  return (
    <div>
      <h1>Superheroes</h1>
      <ul>
        {superheroes &&
          superheroes.map((superhero) => {
            return (
              <SuperheroDetails key={superhero.name} superhero={superhero} />
            );
          })}
      </ul>
      <SuperheroForm />
    </div>
  );
}

export default App;
