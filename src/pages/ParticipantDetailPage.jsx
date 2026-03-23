import { useParams } from 'react-router-dom';
import { dataParticipant } from '../data/dataParticipant';

export default function ParticipantDetailPage() {
  const { id } = useParams();

  const partecipante = dataParticipant.find((p) => p.id === parseInt(id));

  if (!partecipante) {
    return <h2>Partecipante non trovato</h2>;
  }

  return (
    <div>
      <h1>Dettaglio partecipante</h1>
      <p>
        <strong>Nome:</strong>
        {partecipante.name}
      </p>
      <p>
        <strong>Cognome:</strong>
        {partecipante.surname}
      </p>
      <p>
        <strong>Email:</strong>
        {partecipante.email}
      </p>
      <p>
        <strong>Telefono:</strong>
        {partecipante.phone}
      </p>
      <p>
        <strong>Codice Fiscale:</strong>
        {partecipante.tax_id}
      </p>
    </div>
  );
}
