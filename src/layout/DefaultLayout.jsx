import { Outlet } from "react-router";

export default function DefaultTemplate() {
  return (
    <>
      <header className="py-3">
        <div className="container">
          <h1 className="text-danger m-0">Trip Portal</h1>
        </div>
      </header>
      <Outlet />
    </>
  );
}
