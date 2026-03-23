import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="py-3 bg-danger">
      <div className="container">
        <NavLink
          to="/"
          className="fs-1 text-light fw-semibold text-decoration-none">
          Trip Portal
        </NavLink>
      </div>
    </header>
  );
}
