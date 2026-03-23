import { dataViaggi } from "../data/dataViaggi";

export default function TripDetailPage({ tripId, onBack }) {

  // trova il viaggio tramite id
  const viaggio = dataViaggi.find(v => v.id === tripId);

  // fallback sicurezza
  if (!viaggio) {
    return <p className="mt-4">Viaggio non trovato</p>;
  }

  return (
    <div className="container mt-4">

      {/* Bottone torna */}
      {onBack && (
        <button className="btn btn-secondary mb-3" onClick={onBack}>
          ← Torna
        </button>
      )}

      {/* Card viaggio */}
      <div className="card shadow-sm border-0">
        <div className="card-body">

          <h2 className="card-title">{viaggio.nome}</h2>

          <p className="card-text">
            <strong>Data inizio:</strong> {viaggio.data_inizio}
          </p>

          <p className="card-text">
            <strong>Data fine:</strong> {viaggio.data_fine}
          </p>

        </div>
      </div>

      {/* Placeholder partecipanti */}
      <div className="mt-4">
        <h4>Partecipanti</h4>
        <p className="text-muted">
          (In attesa di collegamento con i partecipanti)
        </p>
      </div>

    </div>
  );
}
