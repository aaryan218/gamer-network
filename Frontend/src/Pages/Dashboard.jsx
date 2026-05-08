import React from 'react';
import { useGame } from '../context/GameContext';
import { Users, Swords, Trophy, Activity, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const { activeGame } = useGame();

  const gameData = {
    bgmi: {
      stats: [
        { title: "Upcoming Scrims", value: "3", icon: Swords, color: activeGame.themeColor },
        { title: "Active Tournaments", value: "1", icon: Trophy, color: "#3B82F6" },
        { title: "Team Invites", value: "2", icon: Users, color: "#10B981" },
        { title: "Current Rank", value: "Conqueror", icon: Activity, color: "#8B5CF6" }
      ],
      matches: [
        { event: 'Daily T3 Scrims', date: 'Today, 2:00 PM', placement: '#3', score: '12 Kills' },
        { event: 'BGIS Qualifier', date: 'Yesterday', placement: '#1', score: '24 Kills' },
        { event: 'T2 Practice', date: 'Oct 15', placement: '#8', score: '4 Kills' },
      ],
      nextScrim: { title: 'T2 Daily Paid Scrims', details: 'Erangel • Squad • Entry: ₹100' }
    },
    freefire: {
      stats: [
        { title: "Upcoming Scrims", value: "5", icon: Swords, color: activeGame.themeColor },
        { title: "Active Tournaments", value: "0", icon: Trophy, color: "#3B82F6" },
        { title: "Guild Invites", value: "4", icon: Users, color: "#10B981" },
        { title: "Current Rank", value: "Grandmaster", icon: Activity, color: "#8B5CF6" }
      ],
      matches: [
        { event: 'FFIC Warmup', date: 'Today, 4:00 PM', placement: '#2', score: '8 Kills' },
        { event: 'Guild Wars', date: 'Yesterday', placement: '#1', score: '15 Kills' },
        { event: 'Custom Room', date: 'Oct 14', placement: '#5', score: '3 Kills' },
      ],
      nextScrim: { title: 'FF Weekly Scrims', details: 'Bermuda • Squad • Entry: ₹50' }
    },
    codm: {
      stats: [
        { title: "Upcoming Scrims", value: "2", icon: Swords, color: activeGame.themeColor },
        { title: "Active Tournaments", value: "2", icon: Trophy, color: "#3B82F6" },
        { title: "Team Invites", value: "1", icon: Users, color: "#10B981" },
        { title: "Current Rank", value: "Legendary", icon: Activity, color: "#8B5CF6" }
      ],
      matches: [
        { event: 'Multiplayer Ranked', date: 'Today, 1:00 PM', placement: 'Victory', score: '32 Kills' },
        { event: 'BR Scrims', date: 'Yesterday', placement: '#4', score: '11 Kills' },
        { event: 'CODM Championship', date: 'Oct 12', placement: 'Defeat', score: '14 Kills' },
      ],
      nextScrim: { title: 'Pro MP Scrims', details: 'Hardpoint • 5v5 • Entry: Free' }
    },
    valorant: {
      stats: [
        { title: "Upcoming Scrims", value: "1", icon: Swords, color: activeGame.themeColor },
        { title: "Active Tournaments", value: "1", icon: Trophy, color: "#3B82F6" },
        { title: "Team Invites", value: "0", icon: Users, color: "#10B981" },
        { title: "Current Rank", value: "Immortal", icon: Activity, color: "#8B5CF6" }
      ],
      matches: [
        { event: 'VCC Practice', date: 'Today, 7:00 PM', placement: '13-10', score: '24/12/5' },
        { event: 'Ranked', date: 'Yesterday', placement: '13-8', score: '18/14/2' },
        { event: 'Custom 5v5', date: 'Oct 10', placement: '11-13', score: '15/18/8' },
      ],
      nextScrim: { title: 'VCC Tier 2 Scrims', details: 'Ascent • BO3 • Entry: ₹500' }
    }
  };

  const currentData = gameData[activeGame.id] || gameData.bgmi;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="heading-cyber" style={{ fontSize: '28px', margin: '0 0 8px 0' }}>Welcome back, Player</h1>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Here is your {activeGame.name} dashboard overview.</p>
        </div>
        <button style={{ background: activeGame.themeColor, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          Quick Join Scrim
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {currentData.stats.map((stat, i) => (
          <div key={i} className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: `4px solid ${stat.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: '600' }}>{stat.title}</span>
              <stat.icon size={20} color={stat.color} />
            </div>
            <h2 style={{ fontSize: '32px', margin: 0, fontWeight: 'bold' }}>{stat.value}</h2>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Recent Matches */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className="heading-cyber" style={{ fontSize: '18px', margin: 0 }}>Recent {activeGame.name} Matches</h2>
            <button style={{ background: 'none', border: 'none', color: activeGame.themeColor, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View History <ArrowRight size={16} />
            </button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-secondary)', textAlign: 'left', fontSize: '14px' }}>
                <th style={{ paddingBottom: '12px' }}>Event</th>
                <th style={{ paddingBottom: '12px' }}>Date</th>
                <th style={{ paddingBottom: '12px' }}>Placement / Result</th>
                <th style={{ paddingBottom: '12px' }}>Score</th>
              </tr>
            </thead>
            <tbody>
              {currentData.matches.map((match, i) => (
                <tr key={i} style={{ borderBottom: i !== 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <td style={{ padding: '16px 0', fontWeight: '500' }}>{match.event}</td>
                  <td style={{ padding: '16px 0', color: 'var(--color-text-secondary)' }}>{match.date}</td>
                  <td style={{ padding: '16px 0', color: (match.placement === '#1' || match.placement === 'Victory') ? '#F59E0B' : 'white', fontWeight: 'bold' }}>{match.placement}</td>
                  <td style={{ padding: '16px 0' }}>{match.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Next Scrim */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <h2 className="heading-cyber" style={{ fontSize: '18px', margin: '0 0 20px 0' }}>Up Next</h2>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', marginBottom: '16px' }}>STARTS IN 45 MIN</span>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>{currentData.nextScrim.title}</h3>
            <p style={{ color: 'var(--color-text-secondary)', margin: '0 0 24px 0', fontSize: '14px' }}>{currentData.nextScrim.details}</p>
            <button style={{ width: '100%', background: 'white', color: 'black', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Go to Room Info
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
