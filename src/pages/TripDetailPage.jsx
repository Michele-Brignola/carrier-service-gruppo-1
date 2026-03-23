import { dataTrip } from "../data/dataTrip";
import { useParams} from "react-router";
export default function TripDetailPage({ onBack }) {
  const { id } = useParams();

  // trova il viaggio tramite id
  const viaggio = dataTrip.find(v => v.id === Number(id));

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

          <h2 className="card-title">{viaggio.name}</h2>

          <h2 className="card-title">{viaggio.name}</h2>

         <img 
          src={`/img/${viaggio.img}`} 
          alt={viaggio.name} 
          className="img-fluid mb-3"
         />

          <p className="card-text">
            <strong>Data inizio:</strong> {viaggio.start_date}
          </p>

          <p className="card-text">
            <strong>Data fine:</strong> {viaggio.end_date}
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
