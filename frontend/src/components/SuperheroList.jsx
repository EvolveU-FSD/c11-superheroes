import { useEffect, useState } from "react";
import { SuperheroDetails } from "./SuperheroDetails";

function SuperheroList() {
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
    <ul>
      {superheroes &&
        superheroes.map((superhero) => {
          return (
            <SuperheroDetails key={superhero.name} superhero={superhero} />
          );
        })}
    </ul>
  );
}

export default SuperheroList;
