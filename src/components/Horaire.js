import {data} from '../data/horaire.js';
import Depart from './Depart';

/**
 * composant Horaire
 * @return {jsx} Horaire
 */
function Horaire() {
  // numero={elt.numero}
  return (
    <ul>
      {data.map((elt) => <Depart {...elt}/>)};
    </ul>
  );
}

export default Horaire;

