import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";

import DefaultTemplate from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TripDetailPage from "./pages/TripDetailPage";
import ParticipantDetailPage from "./pages/ParticipantDetailPage";

import { dataParticipant } from "./data/dataParticipant";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";

export default function App() {
  const [participants, setParticipants] = useState(dataParticipant);

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultTemplate}>
          
          <Route index Component={HomePage} />

          <Route
            path="trip/:id"
            element={
              <TripDetailPage
                participants={participants}
                setParticipants={setParticipants}
              />
            }
          />

          <Route
            path="participant/:id"
            element={
              <ParticipantDetailPage participants={participants} />
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}