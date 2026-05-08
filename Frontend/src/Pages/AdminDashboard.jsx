import React from 'react';
import { useGame } from '../context/GameContext';
import { Settings, PlusSquare, DollarSign, Users, BarChart } from 'lucide-react';

const AdminDashboard = () => {
  const { activeGame } = useGame();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: activeGame.themeColor, padding: '4px' }}>
            <img src="https://api.dicebear.com/7.x/shapes/svg?seed=AdminOrg&backgroundColor=0D0D0D" alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover', background: '#111' }} />
          </div>
          <div>
            <h1 className="heading-cyber" style={{ fontSize: '24px', margin: '0 0 4px 0' }}>AdminOrg Workspace</h1>
            <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>Client Admin</span>
          </div>
        </div>
        <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '10px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <Settings size={18} /> Org Settings
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '12px' }}>
            <DollarSign size={24} color="#10B981" />
          </div>
          <div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Revenue (This Month)</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>₹45,200</div>
          </div>
        </div>
        
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '16px', borderRadius: '12px' }}>
            <Users size={24} color="#3B82F6" />
          </div>
          <div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Active Participants</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1,204</div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ background: `rgba(245, 158, 11, 0.1)`, padding: '16px', borderRadius: '12px' }}>
            <BarChart size={24} color="#F59E0B" />
          </div>
          <div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Events Hosted</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>24</div>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 className="heading-cyber" style={{ fontSize: '18px', margin: 0 }}>Quick Actions</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          <button style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'white', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = activeGame.themeColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
            <PlusSquare size={32} color={activeGame.themeColor} />
            <span style={{ fontWeight: '600' }}>Create Scrim</span>
          </button>
          
          <button style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'white', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = activeGame.themeColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
            <PlusSquare size={32} color={activeGame.themeColor} />
            <span style={{ fontWeight: '600' }}>Create Tournament</span>
          </button>

          <button style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', color: 'white', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = activeGame.themeColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}>
            <Settings size={32} color={activeGame.themeColor} />
            <span style={{ fontWeight: '600' }}>Manage Games</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
