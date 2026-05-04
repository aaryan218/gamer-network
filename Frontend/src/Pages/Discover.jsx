import React from 'react';
import { Search, Filter, Star, Users } from 'lucide-react';

const Discover = () => {
  const games = [
    { title: "Neon Drifter", genre: "Racing", players: "125K", rating: 4.8, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Cyber Protocol", genre: "RPG", players: "89K", rating: 4.5, img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Void Walkers", genre: "FPS", players: "210K", rating: 4.9, img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Mecha Assault", genre: "Strategy", players: "45K", rating: 4.2, img: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Synthwave City", genre: "Simulation", players: "32K", rating: 4.6, img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Quantum Blade", genre: "Action", players: "150K", rating: 4.7, img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="heading-cyber" style={{ fontSize: '32px', margin: 0 }}>Discover Games</h1>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', color: 'white', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Filter size={18} /> Filters
          </button>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
            <input
              type="text"
              placeholder="Search genres..."
              style={{ padding: '10px 16px 10px 48px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', width: '250px' }}
            />
          </div>
        </div>
      </div>

      <div className="grid-responsive">
        {games.map((game, i) => (
          <div key={i} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img
                src={game.img}
                alt={game.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', padding: '4px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                <Star size={14} fill="var(--color-blue)" color="var(--color-blue)" /> {game.rating}
              </div>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: '12px', color: 'var(--color-purple)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>{game.genre}</div>
              <h3 className="heading-cyber" style={{ fontSize: '20px', margin: '0 0 16px 0' }}>{game.title}</h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '24px' }}>
                <Users size={16} /> {game.players} Active Players
              </div>

              <div style={{ marginTop: 'auto' }}>
                <button className="btn-neon" style={{ width: '100%', fontSize: '14px', padding: '10px' }}>Join Community</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
