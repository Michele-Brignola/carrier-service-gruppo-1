import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container">
        <NavLink to="/" className="text-decoration-none">
          <h1 className="text-danger fw-semibold">Trip Portal</h1>
        </NavLink>
      </div>
    </header>
  );
}
