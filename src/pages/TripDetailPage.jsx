import { dataTrip } from "../data/dataTrip";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { dataParticipant } from "../data/dataParticipant";
import { Link } from "react-router";

export default function TripDetailPage({ onBack }) {
  const { id } = useParams();
  const participantsForTrip = dataParticipant.filter((p) =>
    p.id_trip.includes(Number(id)),
  );
  const [participants, setParticipants] = useState(participantsForTrip);
  const [showForm, setShowForm] = useState(false);
  let goBack = useNavigate();

  // trova il viaggio tramite id
  const viaggio = dataTrip.find((v) => v.id === Number(id));

  // fallback sicurezza
  if (!viaggio) {
    return <p className="mt-4">Viaggio non trovato</p>;
  }

  //* Change Date Format
  const dateNormalizer = (date) => {
    const originalDate = new Date(date);
    const normalizedData = originalDate.toLocaleDateString();
    return normalizedData;
  };

  return (
    <div className="container mt-4 mb-4">
      {/* Bottone torna */}
      {onBack && (
        <button className="btn btn-secondary mb-3" onClick={onBack}>
          ← Torna
        </button>
      )}

      {/* Card viaggio */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-title mb-4">{viaggio.name}</h2>
            <button className="btn btn-primary" onClick={() => goBack(-1)}>
              Go Back
            </button>
          </div>

          <img
            src={`/${viaggio.img}`}
            alt={viaggio.name}
            className="img-fluid mb-3 rounded"
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <p className="card-text">
            <strong>Start Date:</strong> {dateNormalizer(viaggio.start_date)}
          </p>

          <p className="card-text">
            <strong>End Date:</strong> {dateNormalizer(viaggio.end_date)}
          </p>
        </div>
      </div>

      {/* Placeholder partecipanti */}
      <div className="mt-4">
        <h4 className="mb-4">Participants</h4>
        <button
          className="btn btn-outline-primary mb-3"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Chiudi" : "Aggiungi Partecipante"}
        </button>

        {showForm && (
  <form
    onSubmit={(e) => {
      e.preventDefault();

      const name = e.target.name.value;

      const newId =
        participants.length > 0
          ? Math.max(...participants.map((p) => p.id)) + 1
          : 1;

      const newParticipant = {
        id: newId,
        name,
        surname: "",
        id_trip: [Number(id)],
      };

      setParticipants([...participants, newParticipant]);

      e.target.reset();
      setShowForm(false);
    }}
    className="mb-3"
  >
    <input
      type="text"
      name="name"
      placeholder="Nome e Cognome partecipante"
      className="form-control mb-2"
    />

    <button className="btn btn-primary">Aggiungi</button>
  </form>
)}

<ul className="list-group mt-3">
  {participants.map((p) => (
    <li
      key={p.id}
      className="list-group-item list-group-item-action p-3"
    >
      <small className="fw-bold">Name and Surname:</small>

      <Link
        to={`/participant/${p.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
          fontSize: "1.2rem",
        }}
      >
        {p.name} {p.surname}
      </Link>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}
