import React from 'react';
import { MessageSquare, Share2, ThumbsUp, Image as ImageIcon } from 'lucide-react';

const Feed = () => {
  return (
    <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
      
      {/* Main Feed */}
      <div style={{ flex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Create Post */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CyberNinja&backgroundColor=0D0D0D" alt="Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#111' }} />
            <div style={{ flex: 1 }}>
              <input 
                type="text" 
                placeholder="Share your latest gaming moment..." 
                style={{ width: '100%', padding: '16px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', marginBottom: '16px', outline: 'none' }} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ImageIcon size={20} /> Media
                  </button>
                </div>
                <button className="btn-gradient" style={{ padding: '8px 24px', fontSize: '14px' }}>Post</button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        {[1, 2, 3].map((post, i) => (
          <div key={i} className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}&backgroundColor=7C3AED`} alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#222' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>User{i}_Pro</h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{i + 1} hours ago in General</span>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>•••</button>
            </div>
            
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>Looking for a team for the upcoming qualifiers</h3>
            <p style={{ margin: '0 0 16px 0', lineHeight: 1.6, color: '#E2E8F0' }}>Currently rank Diamond 2, play mostly support/flex. Need a chill but competitive group that practices regularly.</p>
            
            {i === 1 && (
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px' }}>
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3" alt="Gameplay" style={{ width: '100%', display: 'block' }} />
              </div>
            )}

            <div style={{ display: 'flex', gap: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                <ThumbsUp size={18} /> 1.2K
              </button>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-purple)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                <MessageSquare size={18} /> 45
              </button>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                <Share2 size={18} /> Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 className="heading-cyber" style={{ fontSize: '16px', marginTop: 0, marginBottom: '20px' }}>Popular Tags</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['#Tournament', '#LFG', '#Highlights', '#Setup', '#PatchNotes', '#Help'].map(tag => (
              <span key={tag} style={{ padding: '6px 12px', background: 'rgba(124, 58, 237, 0.15)', borderRadius: '16px', fontSize: '13px', color: 'var(--color-blue)', cursor: 'pointer', border: '1px solid rgba(124, 58, 237, 0.3)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
