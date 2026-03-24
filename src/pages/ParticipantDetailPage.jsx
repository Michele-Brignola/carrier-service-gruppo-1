import { useNavigate, useParams } from "react-router";
import { dataParticipant } from "../data/dataParticipant";

export default function ParticipantDetailPage() {
  const { id } = useParams();
  let goBack = useNavigate();

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
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-4">Dettaglio partecipante</h1>
                <button className="btn btn-primary" onClick={() => goBack(-1)}>
                  Go Back
                </button>
              </div>
              <span className="h2">
                {partecipante.name} {partecipante.surname}
              </span>
              <img
                className="vh-25"
                src={`/${partecipante.profile_img}`}
                alt={partecipante.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
          </div>

          <p>
            <strong>Email: </strong>
            {partecipante.email}

            <i className="bi bi-check-circle-fill text-success mx-2 "></i>
          </p>
          <p>
            <strong>Telefono: </strong>
            {partecipante.phone}
            <i className="bi bi-check-circle-fill text-success mx-2 "></i>
          </p>
          <p>
            <strong>Codice Fiscale: </strong>
            {partecipante.tax_id}
            <i className="bi bi-check-circle-fill text-success mx-2 "></i>
          </p>
        </div>
      </div>
    </div>
  );
}
