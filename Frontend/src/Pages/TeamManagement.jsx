import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Users, UserPlus, Settings, ShieldAlert, CheckCircle2, Search } from 'lucide-react';

const TeamManagement = () => {
  const { activeGame } = useGame();

  const gameData = {
    bgmi: {
      teamName: 'Neon Syndicate',
      tier: 'Tier 1 Squad',
      roles: ['IGL', 'Assaulter', 'Sniper', 'Support'],
      players: [
        { name: 'CyberNinja', role: 'IGL', isLeader: true },
        { name: 'Vortex', role: 'Assaulter', isLeader: false },
        { name: 'Ghost', role: 'Sniper', isLeader: false },
        { name: 'Elena_R', role: 'Support', isLeader: false }
      ],
      maxPlayers: 5
    },
    freefire: {
      teamName: 'Booyah Kings',
      tier: 'Grandmaster Guild',
      roles: ['Leader', 'Rusher', 'Flanker', 'Sniper'],
      players: [
        { name: 'FF_God', role: 'Leader', isLeader: true },
        { name: 'Storm', role: 'Rusher', isLeader: false },
        { name: 'Shadow', role: 'Flanker', isLeader: false }
      ],
      maxPlayers: 4
    },
    codm: {
      teamName: 'Task Force 141',
      tier: 'Legendary Clan',
      roles: ['Obj', 'Slayer', 'Anchor', 'Support', 'Flex'],
      players: [
        { name: 'Price', role: 'Obj', isLeader: true },
        { name: 'Ghost', role: 'Slayer', isLeader: false },
        { name: 'Soap', role: 'Anchor', isLeader: false },
        { name: 'Gaz', role: 'Flex', isLeader: false },
        { name: 'Roach', role: 'Support', isLeader: false }
      ],
      maxPlayers: 5
    },
    valorant: {
      teamName: 'Radiant Dawn',
      tier: 'Immortal Roster',
      roles: ['IGL / Initiator', 'Duelist', 'Smokes', 'Sentinel', 'Flex'],
      players: [
        { name: 'TenZ_fan', role: 'Duelist', isLeader: false },
        { name: 'ViperMain', role: 'Smokes', isLeader: true },
        { name: 'CypherGod', role: 'Sentinel', isLeader: false },
        { name: 'SovaDart', role: 'IGL / Initiator', isLeader: false }
      ],
      maxPlayers: 5
    }
  };

  const currentData = gameData[activeGame.id] || gameData.bgmi;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="heading-cyber" style={{ fontSize: '28px', margin: '0 0 8px 0' }}>My Teams</h1>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Manage your rosters for {activeGame.name}.</p>
        </div>
        <button style={{ background: activeGame.themeColor, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserPlus size={18} /> Create New Team
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

        {/* Active Team Card */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'var(--color-black)', border: `2px solid ${activeGame.themeColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={32} color={activeGame.themeColor} />
              </div>
              <div>
                <h2 style={{ margin: '0 0 4px 0', fontSize: '20px' }}>{currentData.teamName}</h2>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>{currentData.tier}</span>
              </div>
            </div>
            <button style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
              <Settings size={20} />
            </button>
          </div>

          <h3 style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '12px', textTransform: 'uppercase' }}>Roster ({currentData.players.length}/{currentData.maxPlayers})</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            {currentData.players.map((player, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: player.isLeader ? `1px solid ${activeGame.themeColor}` : '1px solid transparent' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333' }}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.name}`} alt={player.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {player.name} {player.isLeader && <ShieldAlert size={14} color={activeGame.themeColor} />}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '12px' }}>
                  {player.role}
                </div>
              </div>
            ))}

            {/* Empty Slot */}
            {currentData.players.length < currentData.maxPlayers && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', color: 'var(--color-text-secondary)', gap: '8px' }}>
                <UserPlus size={16} /> Invite Player
              </div>
            )}
          </div>
        </div>

        {/* Invites & Find Players Teaser */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="heading-cyber" style={{ fontSize: '18px', margin: '0 0 16px 0' }}>Pending Invites</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>Team Alpha</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Invited you as Assaulter</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ background: '#10B981', border: 'none', borderRadius: '4px', padding: '6px', color: 'white', cursor: 'pointer' }}><CheckCircle2 size={16} /></button>
                  <button style={{ background: '#EF4444', border: 'none', borderRadius: '4px', padding: '6px', color: 'white', cursor: 'pointer' }}><ShieldAlert size={16} /></button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '32px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(13,13,13,0.9))' }}>
            <Search size={48} color={activeGame.themeColor} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>Need more players?</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '14px' }}>Head over to the Talent Marketplace to find players matching your required roles and experience level.</p>
            <button style={{ background: 'transparent', color: 'white', border: `1px solid ${activeGame.themeColor}`, padding: '10px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Find Players
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
