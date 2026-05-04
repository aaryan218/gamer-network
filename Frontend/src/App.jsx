import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Scrims from "./Pages/Scrims";
import Tournaments from "./Pages/Tournaments";
import TeamManagement from "./Pages/TeamManagement";
import AdminDashboard from "./Pages/AdminDashboard";
import { GameProvider } from "./context/GameContext";
import "./style/cyberpunk.css";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/scrims" element={<Scrims />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/teams" element={<TeamManagement />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Placeholder routes for others */}
            <Route path="/find-players" element={<div style={{padding: '24px'}}>Find Players (Coming Soon)</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;