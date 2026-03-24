import { Link } from "react-router";
import { dataTrip } from "../data/dataTrip";
import { useState } from "react";
import Loading from "../components/Loading";

export default function HomePage() {
  //* useState Constant
  const [trips, setTrips] = useState(dataTrip);
  const [showForm, setShowForm] = useState(false);

  //! TEMPORARY BUTTON LOADING COMPONENT
  const [loadingBtn, setLoadingBtn] = useState(false);

  const pressedLoadingBtn = (e) => {
    if (loadingBtn) {
      setLoadingBtn(false);
    } else {
      setLoadingBtn(true);
    }
  };
  //!

  //* Change Date Format
  const dateNormalizer = (date) => {
    const originalDate = new Date(date);
    const normalizedData = originalDate.toLocaleDateString();
    return normalizedData;
  };

  const [formData, setFormData] = useState({
    destination: "",
    start_date: "",
    end_date: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTrip = {
      id: trips.length + 1,
      name: formData.destination,
      start_date: formData.start_date,
      end_date: formData.end_date,
      img: formData.img,
      tag: "new travel",
    };

    setTrips((prev) => [...prev, newTrip]);

    // reset dati
    setFormData({
      destination: "",
      start_date: "",
      end_date: "",
      img: "",
    });

    setShowForm(false);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4 me-5">
          <h1>Trip List:</h1>
          {/* LOADING ALERT */}

          <div className="homepage-btns">
            <button
              className="btn btn-danger me-2"
              onClick={(e) => {
                pressedLoadingBtn(e);
              }}
            >
              Loading Test
            </button>
            <button
              className="btn btn-success"
              onClick={() => setShowForm((prev) => !prev)}
            >
              + Add Trip
            </button>
          </div>
        </div>
        {showForm && (
          <form className="card p-4 mb-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">New Trip</h4>
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                name="destination"
                placeholder="Destinazione"
                className="form-control mb-3"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="exampleInputDate" className="form-label">
                Start date trip
              </label>
              <input
                type="date"
                name="start_date"
                className="form-control mb-3"
                value={formData.start_date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="exampleInputEndDate" className="form-label">
                End date trip
              </label>

              <input
                type="date"
                name="end_date"
                className="form-control mb-3"
                value={formData.end_date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="exampleInputImage" className="form-label">
                Trip Image
              </label>
              <input
                type="text"
                name="img"
                placeholder="URL immagine"
                className="form-control mb-3"
                value={formData.img}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary">Save Trip</button>
          </form>
        )}
        {loadingBtn ? (
          <Loading />
        ) : (
          <div className="trip-list mb-4 row g-4">
            {trips.map((trip) => (
              <div className="trip-list-card col col-4" key={trip.id}>
                <div className="card card-item">
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
        )}
      </div>
    </>
  );
}
