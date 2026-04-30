import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Profile from "./Pages/Profile";
import "./style/App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <div className="app-shell__layout">
        <Sidebar />

        <main className="app-shell__content">
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;