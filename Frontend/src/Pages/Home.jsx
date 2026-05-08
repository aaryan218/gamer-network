import React from 'react';
import { Play, TrendingUp, Users, Activity, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-dashboard" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Hero / Trending Section */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 className="heading-cyber" style={{ fontSize: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp className="text-neon-purple" /> Trending Now
          </h2>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--color-blue)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            View all <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="hero-banner glass-panel" style={{ position: 'relative', height: '340px', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '40px' }}>
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Cyberpunk Game" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.2) 100%)', zIndex: -1 }}></div>
          
          <div style={{ maxWidth: '600px', zIndex: 1 }}>
            <span style={{ display: 'inline-block', background: 'rgba(124, 58, 237, 0.3)', border: '1px solid var(--color-purple)', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-blue)', marginBottom: '16px' }}>FEATURED UPDATE</span>
            <h1 className="heading-cyber" style={{ fontSize: '48px', margin: '0 0 16px 0', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>NEON DRIFTER</h1>
            <p style={{ color: '#E2E8F0', fontSize: '16px', lineHeight: 1.5, marginBottom: '24px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Experience the ultimate cyberpunk racing simulator. New tracks, enhanced graphics, and competitive multiplayer modes now available.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-gradient" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 32px', fontSize: '16px' }}>
                <Play fill="currentColor" size={18} /> Play Now
              </button>
              <button className="btn-neon" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 32px', fontSize: '16px' }}>
                <Users size={18} /> Join Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Layout for Activity and Widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '32px' }}>
        
        {/* Activity Feed */}
        <section>
          <h2 className="heading-cyber" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Activity className="text-neon-blue" /> Your Feed
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Post 1 */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=7C3AED" alt="User" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#222' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Alex "Vortex" Chen</h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>2 hours ago in Valorant</span>
                </div>
              </div>
              <p style={{ margin: '0 0 16px 0', lineHeight: 1.6 }}>Just hit Immortal rank! Massive thanks to the squad for the insane clutch plays tonight. The grind doesn't stop here. 🚀</p>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Gameplay" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Post 2 */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sam&backgroundColor=00F5FF" alt="User" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#222' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Sam "Ghost" Miller</h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>5 hours ago</span>
                </div>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>Looking for 2 more players for the upcoming Cyber Cup tournament. Must be Diamond+ and have good comms. DM if interested!</p>
            </div>

          </div>
        </section>

        {/* Sidebar Widgets */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Online Friends */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="heading-cyber" style={{ fontSize: '16px', marginTop: 0, marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>Friends Online (4)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Elena_R', game: 'Apex Legends', status: 'In Match', color: '#00F5FF' },
                { name: 'Marcus', game: 'Neon Drifter', status: 'Lobby', color: '#7C3AED' },
                { name: 'Jinx_404', game: 'Valorant', status: 'Online', color: '#10B981' },
                { name: 'Titan', game: 'League of Legends', status: 'In Match', color: '#00F5FF' }
              ].map((friend, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.name}`} alt={friend.name} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }} />
                    <span style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', backgroundColor: '#10B981', borderRadius: '50%', border: '2px solid var(--color-bg-panel)' }}></span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{friend.name}</div>
                    <div style={{ fontSize: '12px', color: friend.color }}>{friend.game}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-neon" style={{ width: '100%', marginTop: '20px', fontSize: '12px', padding: '8px' }}>View All Friends</button>
          </div>

          {/* Leaderboard Snippet */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="heading-cyber" style={{ fontSize: '16px', marginTop: 0, marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>Global Ranking</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--color-blue)', fontWeight: 'bold', fontSize: '18px' }}>#1</span>
                <span>Faker</span>
              </div>
              <span style={{ color: 'var(--color-purple)' }}>9,450 SR</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--color-blue)', fontWeight: 'bold', fontSize: '18px' }}>#2</span>
                <span>TenZ</span>
              </div>
              <span style={{ color: 'var(--color-purple)' }}>9,210 SR</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(124, 58, 237, 0.1)', borderRadius: '8px', border: '1px solid rgba(124, 58, 237, 0.3)', marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>#4,092</span>
                <span>You</span>
              </div>
              <span style={{ color: 'var(--color-blue)' }}>2,450 SR</span>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default Home;
