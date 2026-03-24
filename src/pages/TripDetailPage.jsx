import { dataTrip } from "../data/dataTrip";
import { useParams} from "react-router-dom";
import { useState } from "react";
import { dataParticipant } from "../data/dataParticipant";


export default function TripDetailPage({ onBack }) {
  const { id } = useParams();
 const participantsForTrip = dataParticipant.filter(p => p.id_trip.includes(Number(id)));
  const [participants, setParticipants] = useState(participantsForTrip);

 

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

          
         <img 
          src={`/${viaggio.img}`} 
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

      <form 
        onSubmit={(e) => {
        e.preventDefault();
    
       const name = e.target.name.value;
    
       const newParticipant = {
        id: Date.now(),
         name
        };

        setParticipants([...participants, newParticipant]);

        e.target.reset();
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

      <ul className="list-group">
        {participants.map(p => (
       <li key={p.id} className="list-group-item">
        {p.name} {p.surname}
       </li>
       ))}
      </ul>
      </div>

     </div>
    );
    }
