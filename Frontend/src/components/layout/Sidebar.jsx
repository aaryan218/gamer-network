import { NavLink } from "react-router-dom";
import { LayoutDashboard, Swords, Trophy, Users, Search, Settings } from "lucide-react";
import { useGame } from '../../context/GameContext';

const Sidebar = () => {
  const { activeGame } = useGame();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Scrims", path: "/scrims", icon: Swords },
    { name: "Tournaments", path: "/tournaments", icon: Trophy },
    { name: "My Teams", path: "/teams", icon: Users },
    { name: "Find Players", path: "/find-players", icon: Search },
    { name: "Admin Setup", path: "/admin", icon: Settings },
  ];

  return (
    <aside className="sidebar glass-panel" style={{ width: '260px', height: 'calc(100vh - 80px)', position: 'fixed', left: '24px', top: '90px', padding: '24px 0', display: 'flex', flexDirection: 'column' }}>
      <div className="sidebar-brand" style={{ padding: '0 24px', marginBottom: '40px' }}>
        <h2 className="heading-cyber" style={{ fontSize: '20px', margin: 0, color: 'white' }}>Gamer <span style={{ color: activeGame.themeColor }}>Network</span></h2>
      </div>

      <nav className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: isActive ? 'white' : 'var(--color-text-secondary)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                borderLeft: isActive ? `3px solid ${activeGame.themeColor}` : '3px solid transparent',
                transition: 'all 0.2s ease',
                fontWeight: isActive ? '600' : '500',
              })}
            >
              {({ isActive }) => (
                <>
                  <Icon size={20} style={{ color: isActive ? activeGame.themeColor : 'currentColor' }} />
                  <span style={{ fontSize: '14px' }}>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer" style={{ marginTop: 'auto', padding: '0 24px' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', margin: '0 0 12px 0' }}>Organizer Plan active</p>
          <button style={{ background: 'white', color: 'black', border: 'none', borderRadius: '4px', width: '100%', padding: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Manage Subscription</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
