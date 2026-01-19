import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import SitePage from "./pages/SitePage";
import RoomPage from "./pages/RoomPage";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/site/:siteId" element={<SitePage />} />
          <Route path="/site/:siteId/room/:roomId" element={<RoomPage />} />
          <Route
            path="/site/:siteId/room/:roomId/calendar"
            element={<CalendarPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
