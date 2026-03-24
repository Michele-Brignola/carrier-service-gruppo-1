import { Link } from 'react-router';
import { dataTrip } from '../data/dataTrip';
import { useState } from 'react';

export default function HomePage() {
  const dateNormalizer = (date) => {
    const originalDate = new Date(date);
    const normalizedData = originalDate.toLocaleDateString();
    return normalizedData;
  };

  //State

  const [trips, setTrips] = useState(dataTrip);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    destination: '',
    start_date: '',
    end_date: '',
    img: '',
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
      tag: 'new travel',
    };

    setTrips((prev) => [...prev, newTrip]);

    // reset dati
    setFormData({
      destination: '',
      start_date: '',
      end_date: '',
      img: '',
    });

    setShowForm(false);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4 me-5">
          <h1>Trip List:</h1>

          <button
            className="btn btn-success mr-5"
            onClick={() => setShowForm((prev) => !prev)}
          >
            + Add Trip
          </button>
        </div>
        {showForm && (
          <form className="card p-4 mb-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">New Trip</h4>
            <div>
              <label for="exampleInputEmail1" class="form-label">
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
              <label for="exampleInputDate" class="form-label">
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
              <label for="exampleInputEndDate" class="form-label">
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
              <label for="exampleInputImage" class="form-label">
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
        <div className="trip-list mb-4 row g-4">
          {trips.map((trip) => (
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
