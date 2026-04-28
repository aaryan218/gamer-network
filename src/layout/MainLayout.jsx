import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* Navbar (full width) */}
      <div className="navbar">Navbar</div>

      {/* Page container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;