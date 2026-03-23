import { BrowserRouter, Route, Routes } from "react-router";

import DefaultTemplate from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TripDetailPage from "./pages/TripDetailPage";
import ParticipantDetailPage from "./pages/ParticipantDetailPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultTemplate}>
          <Route index Component={HomePage} />
          <Route path="trip/:id" Component={TripDetailPage} />
          <Route path="participant/:id" Component={ParticipantDetailPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
