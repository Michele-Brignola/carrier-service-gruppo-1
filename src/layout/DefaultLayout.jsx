import { Outlet } from "react-router";

export default function DefaultTemplate() {
  return (
    <>
      <header className="bg-dark py-3 mb-4">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="text-danger m-0">Boolflix</h1>
        </div>
      </header>
      <Outlet />
    </>
  );
}
