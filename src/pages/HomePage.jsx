import { Link } from "react-router";
import { dataTrip } from "../data/dataTrip";

export default function HomePage() {
  const dateNormalizer = (date) => {
    const originalDate = new Date(date);
    const normalizedData = originalDate.toLocaleDateString();
    return normalizedData;
  };

  return (
    <>
      <div className="container">
        <h1 className="my-4">Trip List:</h1>
        <div className="trip-list mb-4 row g-4">
          {dataTrip.map((trip) => (
            <div className="trip-list-card col col-4">
              <div className="card " key={trip.id}>
                <img
                  src={trip.img}
                  className="card-img-top image-trip-list"
                  alt={trip.name}
                />
                <div className="card-body">
                  <div className="card-trip-header">
                    <h4 className="card-title">{trip.name}</h4>
                    <span className="badge text-bg-success badge-trip-list">
                      In Progress
                    </span>
                  </div>
                  <div className="dates-cards">
                    <div className="start-data-texts text-center">
                      <span className="trip-title-card">Start Date: </span>
                      <p className="trip-text-card">
                        {dateNormalizer(trip.start_date)}
                      </p>
                    </div>
                    <div className="end-data-texts text-center">
                      <span className="trip-title-card">End Date: </span>
                      <p className="trip-text-card">
                        {dateNormalizer(trip.end_date)}
                      </p>
                    </div>
                  </div>
                  <Link to={`/trip/${trip.id}`} className="btn btn-primary">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
