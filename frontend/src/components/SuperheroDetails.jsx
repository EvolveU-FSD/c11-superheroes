export function SuperheroDetails(props) {
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
