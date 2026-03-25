import { useNavigate, useParams } from "react-router";
import { dataParticipant } from "../data/dataParticipant";

export default function ParticipantDetailPage() {
  const { id } = useParams();
  let goBack = useNavigate();

  const partecipante = dataParticipant.find((p) => p.id === parseInt(id));

  if (!partecipante) {
    return <h2>Partecipant not found</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="my-5">
          <div className="mb-3">
            <div className="mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-4">
                  Participant detail: {partecipante.name} {partecipante.surname}
                </h1>
                <button className="btn btn-primary" onClick={() => goBack(-1)}>
                  Go Back
                </button>
              </div>
              <div className="card p-3" style={{ width: "450px" }}>
                <img
                  className="card-img-top rounded-circle"
                  src={
                    partecipante.url_profile_img
                      ? `${partecipante.url_profile_img}`
                      : `/${partecipante.profile_img}`
                  }
                  alt="Card image cap"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body mt-1 ps-0">
                  <h5 className="card-title">
                    {partecipante.name} {partecipante.surname}
                  </h5>
                  <p className="card-text">
                    <strong>Email: </strong>
                    {partecipante.email}

                    <i className="bi bi-check-circle-fill text-success mx-2 "></i>
                  </p>
                  <p className="card-text">
                    <strong>Phone: </strong>
                    {partecipante.phone}
                    <i className="bi bi-check-circle-fill text-success mx-2 "></i>
                  </p>
                  <p className="card-text">
                    <strong>Tax Id: </strong>
                    {partecipante.tax_id}
                    <i className="bi bi-check-circle-fill text-success mx-2 "></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
