import React from 'react';
import { Award, Crosshair, Zap, Settings, Trophy, Clock } from 'lucide-react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Profile Header */}
      <div className="glass-panel" style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ height: '200px', background: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(13,13,13,0.9))' }}></div>
        </div>
        
        <div style={{ padding: '0 32px 32px 32px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '-60px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--color-black)', padding: '4px', border: '2px solid var(--color-purple)' }}>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CyberNinja&backgroundColor=0D0D0D" alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--color-purple)', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', border: '2px solid var(--color-black)' }}>Lvl 42</div>
            </div>
            
            <div style={{ paddingBottom: '12px' }}>
              <h1 className="heading-cyber" style={{ fontSize: '32px', margin: '0 0 8px 0' }}>CyberNinja</h1>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)' }}>
                <span>@cyber_ninja_99</span>
                <span>Joined Oct 2024</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', paddingBottom: '12px' }}>
            <button className="btn-neon" style={{ padding: '10px 24px' }}>Edit Profile</button>
            <button className="glass-panel" style={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={20} color="var(--color-text-secondary)" />
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
        
        {/* Left Sidebar: Stats & Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="heading-cyber" style={{ fontSize: '18px', margin: '0 0 20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>Overview</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Crosshair size={16} /> Accuracy</span>
                <span style={{ fontWeight: 'bold', color: 'var(--color-blue)' }}>87%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Trophy size={16} /> Win Rate</span>
                <span style={{ fontWeight: 'bold', color: 'var(--color-purple)' }}>64.2%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> Playtime</span>
                <span style={{ fontWeight: 'bold' }}>1,240 hrs</span>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="heading-cyber" style={{ fontSize: '18px', margin: '0 0 20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>Badges</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { icon: <Award size={24} color="#FBBF24" />, name: 'Founder' },
                { icon: <Zap size={24} color="#00F5FF" />, name: 'MVP' },
                { icon: <Crosshair size={24} color="#EF4444" />, name: 'Sharpshooter' },
                { icon: <Trophy size={24} color="#8B5CF6" />, name: 'Champion' },
              ].map((badge, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {badge.icon}
                  <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main: Activity & Top Games */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="heading-cyber" style={{ fontSize: '18px', margin: '0 0 20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>Top Games</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Valorant', rank: 'Immortal 1', hours: '450h', icon: 'V' },
                { name: 'Apex Legends', rank: 'Diamond 2', hours: '320h', icon: 'A' },
                { name: 'Cyber Protocol', rank: 'Level 85', hours: '120h', icon: 'C' }
              ].map((game, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>
                      {game.icon}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px' }}>{game.name}</h4>
                      <span style={{ fontSize: '13px', color: 'var(--color-purple)' }}>{game.rank}</span>
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>{game.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
