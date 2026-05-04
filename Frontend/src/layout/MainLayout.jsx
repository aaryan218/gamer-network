import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const MainLayout = () => {
  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-black)' }}>
      <Navbar />
      <Sidebar />
      <main 
        className="main-content" 
        style={{ 
          flex: 1, 
          marginLeft: '308px',
          marginTop: '90px',
          padding: '24px',
          maxWidth: 'calc(100vw - 308px)',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;