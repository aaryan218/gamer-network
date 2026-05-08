import React, { useState } from 'react';
import { Bell, Search, Settings, ChevronDown } from "lucide-react";
import { useGame } from '../../context/GameContext';

const Navbar = () => {
  const { activeGame, supportedGames, switchGame } = useGame();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="navbar glass-panel" style={{ height: '70px', position: 'fixed', top: '10px', left: '24px', right: '24px', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
      
      {/* Search Bar */}
      <div className="search-container" style={{ position: 'relative', width: '300px', marginLeft: '280px' }}>
        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
        <input 
          type="text" 
          placeholder="Search teams, players, tournaments..." 
          style={{ 
            width: '100%', 
            padding: '10px 16px 10px 48px', 
            background: 'rgba(0,0,0,0.4)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '8px',
            color: 'white',
            outline: 'none',
            fontFamily: 'Inter',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = activeGame.themeColor}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
        />
      </div>

      {/* Right Actions */}
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        
        {/* Game Context Selector */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.5)', border: `1px solid ${activeGame.themeColor}`, borderRadius: '8px', padding: '8px 16px', color: 'white', cursor: 'pointer', transition: 'all 0.3s' }}
          >
            <span style={{ color: activeGame.themeColor, fontWeight: 'bold' }}>{activeGame.icon}</span>
            {activeGame.name}
            <ChevronDown size={16} />
          </button>
          
          {isDropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '8px', background: 'var(--color-bg-panel)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden', width: '160px', zIndex: 101 }}>
              {supportedGames.map(game => (
                <div 
                  key={game.id}
                  onClick={() => { switchGame(game.id); setIsDropdownOpen(false); }}
                  style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'background 0.2s', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ color: game.themeColor, fontWeight: 'bold' }}>{game.icon}</span>
                  <span style={{ color: 'white', fontSize: '14px' }}>{game.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notifications & Settings */}
        <div className="notification-btn" style={{ position: 'relative', cursor: 'pointer', color: 'var(--color-text-secondary)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = activeGame.themeColor} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
          <Bell size={22} />
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: activeGame.themeColor, width: '10px', height: '10px', borderRadius: '50%', border: '2px solid var(--color-bg-panel)' }}></span>
        </div>

        {/* User Profile */}
        <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>AdminOrg</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Pro Tier</div>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: activeGame.themeColor, padding: '2px' }}>
            <img 
              src="https://api.dicebear.com/7.x/shapes/svg?seed=AdminOrg&backgroundColor=0D0D0D" 
              alt="Avatar" 
              style={{ width: '100%', height: '100%', borderRadius: '6px', objectFit: 'cover', background: '#111' }} 
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
