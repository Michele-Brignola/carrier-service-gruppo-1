import { dataTrip } from "../data/dataTrip";
import { dataParticipant } from "../data/dataParticipant";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

export default function TripDetailPage({
  participants,
  setParticipants,
  onBack,
}) {
  const { id } = useParams();
  const participantsForTrip = participants.filter((p) =>
    p.id_trip.includes(Number(id)),
  );
  const [showForm, setShowForm] = useState(false);
  let goBack = useNavigate();

  // trova il trip tramite id
  const trip = dataTrip.find((v) => v.id === Number(id));

  // fallback sicurezza
  if (!trip) {
    return <p className="mt-4">Trip not found</p>;
  }

  //* Change Date Format
  const dateNormalizer = (date) => {
    const originalDate = new Date(date);
    const normalizedData = originalDate.toLocaleDateString();
    return normalizedData;
  };

  return (
    <div className="container mt-4 mb-4">
      {/* Card trip */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-title mb-4">{trip.name}</h2>
            <button className="btn btn-primary" onClick={() => goBack(-1)}>
              Go Back
            </button>
          </div>

          <img
            src={trip.url_image ? `${trip.url_image}` : `/${trip.img}`}
            alt={trip.name}
            className="img-fluid mb-3 rounded"
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />

          <p className="card-text">
            <strong>Start Date:</strong> {dateNormalizer(trip.start_date)}
          </p>

          <p className="card-text">
            <strong>End Date:</strong> {dateNormalizer(trip.end_date)}
          </p>
        </div>
      </div>

      {/* Placeholder partecipanti */}
      <div className="mt-4">
        <h4 className="mb-4">Participants</h4>
        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Add Participant"}
        </button>

        {showForm && (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const surname = e.target.surname.value;
              const email = e.target.email.value;
              const phone = e.target.phone.value;
              const tax_id = e.target.tax_id.value;
              const url_profile_img = e.target.url_image.value;

              const newId =
                participants.length > 0
                  ? Math.max(...participants.map((p) => p.id)) + 1
                  : 1;

              const newParticipant = {
                id: newId,
                name,
                surname,
                profile_img: "defaultProfileImg.png",
                url_profile_img,
                email,
                phone,
                tax_id,
                id_trip: [Number(id)],
              };

              dataParticipant.push(newParticipant);

              e.target.reset();
              setShowForm(false);
            }}
            className="card p-4 mb-4"
          >
            <h4 className="mb-3">New Participants</h4>
            <label htmlFor="participant_name" className="form-label">
              Participant Name
            </label>
            <input
              id="participant_name"
              type="text"
              name="name"
              placeholder="Nome (Es: Mario)"
              className="form-control mb-3"
            />
            <label htmlFor="participant_surname" className="form-label">
              Participant Surname
            </label>
            <input
              id="participant_surname"
              type="text"
              name="surname"
              placeholder="Cognome (Es: Rossi)"
              className="form-control mb-3"
            />
            <label htmlFor="participant_email" className="form-label">
              Participant Email
            </label>
            <input
              id="participant_email"
              type="email"
              name="email"
              placeholder="Email (Es: mario.rossi@example.com)"
              className="form-control mb-3"
            />
            <label htmlFor="participant_phone_number" className="form-label">
              Participant Phone Number
            </label>
            <input
              id="participant_phone_number"
              type="text"
              name="phone"
              placeholder="Phone number (Es: +39 123 456 7890)"
              className="form-control mb-3"
            />
            <label htmlFor="participant_tax_id" className="form-label">
              Tax ID Code
            </label>
            <input
              id="participant_tax_id"
              type="text"
              name="tax_id"
              placeholder="Tax ID Code  (Es: BOC000000000000X)"
              className="form-control mb-3"
            />
            <label htmlFor="participant_url_image" className="form-label">
              Participant Image
            </label>
            <input
              id="participant_url_image"
              type="text"
              name="url_image"
              placeholder="URL Participant Image"
              className="form-control mb-3"
            />

            <button className="btn btn-primary">Add Participant</button>
          </form>
        )}

        <ul className="list-group mt-3">
          {participantsForTrip.map((p) => (
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
                <p className="mb-1">
                  {p.name} {p.surname}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
