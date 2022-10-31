/**
 * composant depart
 * @param {object} props
 * @return {jsx} depart
 */
function Depart(props) {
  return (
    <li>
      <h2>Numero : {props.numero}</h2>
      <p> Origin :{props.origin}</p>
    </li>
  );
}

export default Depart;
