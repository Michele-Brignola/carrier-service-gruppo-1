import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="py-3 bg-primary">
      <div className="container">
        <NavLink to="/" className="fs-1 text-light fw-semibold">
          🚌 Boo Portal
        </NavLink>
        <Link to="/trip/1" className="fs-5 ms-4 text-light fw-semibold">
          test trip
        </Link>
        <Link to="/participant/1" className="fs-5 ms-4 text-light fw-semibold">
          test participant
        </Link>
      </div>
    </header>
  );
}
