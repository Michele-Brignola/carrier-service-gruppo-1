import { useParams } from 'react-router';
import { dataParticipant } from '../data/dataParticipant';

export default function ParticipantDetailPage() {
  const { id } = useParams();

  const partecipante = dataParticipant.find((p) => p.id === parseInt(id));

  if (!partecipante) {
    return <h2>Partecipante non trovato</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="my-5">
          <div className="mb-3">
            <div className="mb-2">
              <h1>Dettaglio partecipante</h1>
              <span className="h2">
                {partecipante.name} {partecipante.surname}
              </span>
              <img
                className="vh-25"
                src={`/${partecipante.profile_img}`}
                alt={partecipante.name}
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
          </div>

          <p>
            <strong>Email: </strong>
            {partecipante.email}

            <i class="bi bi-check-circle-fill text-success mx-2 "></i>
          </p>
          <p>
            <strong>Telefono: </strong>
            {partecipante.phone}
            <i class="bi bi-check-circle-fill text-success mx-2 "></i>
          </p>
          <p>
            <strong>Codice Fiscale: </strong>
            {partecipante.tax_id}
            <i class="bi bi-check-circle-fill text-success mx-2 "></i>
          </p>
        </div>
      </div>
    </div>
  );
}
