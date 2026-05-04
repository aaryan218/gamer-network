import React from 'react';
import { useGame } from '../context/GameContext';
import { Trophy, Calendar, Users, DollarSign, ChevronRight } from 'lucide-react';

const Tournaments = () => {
  const { activeGame } = useGame();

  const gameData = {
    bgmi: {
      featured: { title: 'BGIS Masters Series', desc: 'The ultimate test of skill. Gather your squad and compete for a massive prize pool.', prize: '₹500,000', dates: 'Dec 1 - Dec 20', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
      list: [
        { title: 'BGMI Winter Championship', org: 'Global Esports', prize: '₹100,000', entry: 'Free', date: 'Nov 1 - Nov 15', slots: '64/128 Teams', status: 'Registration Open', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { title: 'Weekly Pro League', org: 'AdminOrg', prize: '₹25,000', entry: '₹500/Team', date: 'Starts Oct 20', slots: '12/24 Teams', status: 'Filling Fast', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }
      ]
    },
    freefire: {
      featured: { title: 'Free Fire World Cup Qualifier', desc: 'Secure your spot in the global stage. Regional clash for glory and massive diamonds.', prize: '1,000,000 Diamonds', dates: 'Nov 15 - Nov 30', img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
      list: [
        { title: 'FF Weekend Brawl', org: 'Booyah Esports', prize: '₹50,000', entry: 'Free', date: 'Oct 25', slots: '24/48 Teams', status: 'Registration Open', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { title: 'Clash Squad Series', org: 'AdminOrg', prize: '₹10,000', entry: '₹200/Team', date: 'Starts Oct 28', slots: '8/16 Teams', status: 'Filling Fast', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }
      ]
    },
    codm: {
      featured: { title: 'CODM Stage 3 Championship', desc: 'Battle the best mobile squads. Show your mastery across Hardpoint, S&D, and Control.', prize: '$20,000 USD', dates: 'Jan 5 - Jan 25', img: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
      list: [
        { title: 'CODM MP Rivals', org: 'Tribe Gaming', prize: '₹30,000', entry: 'Free', date: 'Dec 1 - Dec 5', slots: '16/32 Teams', status: 'Registration Open', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { title: 'BR Royale Bash', org: 'AdminOrg', prize: '₹15,000', entry: '₹300/Squad', date: 'Starts Nov 10', slots: '20/25 Teams', status: 'Filling Fast', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }
      ]
    },
    valorant: {
      featured: { title: 'VCC Challengers', desc: 'The path to Ascension starts here. Prove you are radiant.', prize: '₹2,000,000', dates: 'Feb 10 - Mar 5', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
      list: [
        { title: 'Valorant Community Cup', org: 'Skyesports', prize: '₹150,000', entry: 'Free', date: 'Oct 20 - Nov 5', slots: '32/64 Teams', status: 'Registration Open', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
        { title: 'Agent Draft League', org: 'AdminOrg', prize: '₹50,000', entry: '₹1000/Team', date: 'Starts Nov 1', slots: '6/12 Teams', status: 'Filling Fast', image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }
      ]
    }
  };

  const currentData = gameData[activeGame.id] || gameData.bgmi;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="heading-cyber" style={{ fontSize: '28px', margin: '0 0 8px 0' }}>Tournaments</h1>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Compete in premium {activeGame.name} tournaments and win prizes.</p>
        </div>
        <button style={{ background: 'var(--color-bg-panel)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
          Filter Events
        </button>
      </div>

      {/* Featured Tournament */}
      <div className="glass-panel" style={{ overflow: 'hidden', position: 'relative', display: 'flex', minHeight: '300px' }}>
        <img 
          src={currentData.featured.img} 
          alt="Featured" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(90deg, var(--color-black) 0%, rgba(13,13,13,0.6) 100%)` }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '600px' }}>
          <span style={{ display: 'inline-block', background: activeGame.themeColor, color: 'white', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', marginBottom: '16px', alignSelf: 'flex-start' }}>
            FEATURED EVENT
          </span>
          <h2 className="heading-cyber" style={{ fontSize: '36px', margin: '0 0 16px 0' }}>{currentData.featured.title}</h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
            {currentData.featured.desc}
          </p>
          
          <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
            <div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>PRIZE POOL</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: activeGame.themeColor }}>{currentData.featured.prize}</div>
            </div>
            <div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '4px' }}>DATES</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{currentData.featured.dates}</div>
            </div>
          </div>
          
          <button style={{ background: 'white', color: 'black', border: 'none', padding: '12px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start' }}>
            Register Now
          </button>
        </div>
      </div>

      {/* Tournament Grid */}
      <h3 className="heading-cyber" style={{ fontSize: '20px', margin: '16px 0 0 0' }}>All Events</h3>
      <div className="grid-responsive">
        {currentData.list.map((t, i) => (
          <div key={i} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '160px' }}>
              <img src={t.image} alt={t.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', border: `1px solid ${activeGame.themeColor}` }}>
                {t.status}
              </div>
            </div>
            
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Organized by {t.org}</div>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>{t.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={14}/> Prize</span>
                  <span style={{ fontWeight: 'bold', color: activeGame.themeColor }}>{t.prize}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14}/> Date</span>
                  <span>{t.date}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={14}/> Slots</span>
                  <span>{t.slots}</span>
                </div>
              </div>
              
              <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', width: '100%', padding: '10px', borderRadius: '6px', cursor: 'pointer', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                View Details <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tournaments;
