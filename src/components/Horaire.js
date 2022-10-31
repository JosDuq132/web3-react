import Depart from './Depart';

/**
 * composant Horaire
 * @return {jsx} Horaire
 */
function Horaire() {
  return (
    <ul>
      <Depart numero={100} origin="St-Jean-sur-Richelieu"/>
      <Depart numero={110} origin="St-Jean-sur-Richelieu"/>
      <Depart numero={120} origin="St-Jean-sur-Richelieu"/>
    </ul>
  );
}

export default Horaire;

