import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Clock, Users, Shield, ArrowRight } from 'lucide-react';

const Scrims = () => {
  const { activeGame } = useGame();
  const [activeTab, setActiveTab] = useState('free');

  const gameData = {
    bgmi: { map: 'Erangel & Miramar', prefix: 'T3 SCRIM', suffix: 'Evening Showdown' },
    freefire: { map: 'Bermuda & Purgatory', prefix: 'WEEKLY', suffix: 'Guild Wars' },
    codm: { map: 'Crash & Firing Range', prefix: 'PRO SCRIM', suffix: 'MP Practice' },
    valorant: { map: 'Ascent & Bind', prefix: 'VCC PREP', suffix: '5v5 Scrims' }
  };

  const currentData = gameData[activeGame.id] || gameData.bgmi;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="heading-cyber" style={{ fontSize: '28px', margin: '0 0 8px 0' }}>Daily Scrims</h1>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Register your team for {activeGame.name} practice matches.</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {['free', 'paid', 'my-registrations'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'none', 
              border: 'none', 
              borderBottom: activeTab === tab ? `2px solid ${activeGame.themeColor}` : '2px solid transparent',
              color: activeTab === tab ? 'white' : 'var(--color-text-secondary)',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Scrims List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>OCT</span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: activeGame.themeColor }}>{15 + item}</span>
              </div>
              
              <div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>{currentData.prefix}</span>
                  {activeTab === 'paid' && <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>₹50 ENTRY</span>}
                </div>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{activeGame.name} {currentData.suffix} #{item}</h3>
                <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {5 + item}:00 PM IST</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Shield size={14} /> {currentData.map}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={16} color="var(--color-text-secondary)" />
                <div style={{ width: '120px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${(item * 20)}%`, height: '100%', background: activeGame.themeColor }}></div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{item * 4}/20</span>
              </div>
              <button style={{ background: activeGame.themeColor, color: 'white', border: 'none', padding: '8px 24px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Register <ArrowRight size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrims;
