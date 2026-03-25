import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="py-3 bg-primary">
      <div className="container">
        <NavLink to="/" className="fs-1 text-light fw-semibold header-title">
          🚌 Boo Portal
        </NavLink>
      </div>
    </header>
  );
}
