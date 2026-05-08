import React from 'react';
import { Send, Phone, Video, MoreVertical, Search } from 'lucide-react';

const Messages = () => {
  return (
    <div className="glass-panel" style={{ display: 'flex', height: 'calc(100vh - 140px)', overflow: 'hidden' }}>
      
      {/* Sidebar Contacts */}
      <div style={{ width: '320px', borderRight: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="heading-cyber" style={{ fontSize: '20px', margin: '0 0 16px 0' }}>Messages</h2>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              style={{ width: '100%', padding: '10px 10px 10px 36px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none' }}
            />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {['Elena_R', 'Marcus', 'Squad Alpha', 'Jinx_404'].map((name, i) => (
            <div key={i} style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', background: i === 0 ? 'rgba(124, 58, 237, 0.1)' : 'transparent', borderLeft: i === 0 ? '4px solid var(--color-purple)' : '4px solid transparent', transition: 'background 0.3s' }}>
              <div style={{ position: 'relative' }}>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#333' }} />
                <span style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', backgroundColor: i % 2 === 0 ? '#10B981' : '#6B7280', borderRadius: '50%', border: '2px solid var(--color-bg-panel)' }}></span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '600', fontSize: '15px' }}>{name}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>10:42 AM</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '180px' }}>
                  {i === 0 ? 'Ready for the match tonight?' : 'gg wp!'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Chat Header */}
        <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena_R" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333' }} />
            <div>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Elena_R</h3>
              <span style={{ fontSize: '12px', color: '#10B981' }}>Online - Apex Legends</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)' }}>
            <Phone size={20} style={{ cursor: 'pointer' }} />
            <Video size={20} style={{ cursor: 'pointer' }} />
            <MoreVertical size={20} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 16px', borderRadius: '16px 16px 16px 0', border: '1px solid rgba(255,255,255,0.1)' }}>
              Hey! You around? We need one more for ranked.
            </div>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px', display: 'block' }}>10:30 AM</span>
          </div>
          
          <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
            <div style={{ background: 'var(--color-purple)', color: 'white', padding: '12px 16px', borderRadius: '16px 16px 0 16px', boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)' }}>
              Yeah I can hop on in 10 mins. Just finishing up some stuff.
            </div>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px', display: 'block', textAlign: 'right' }}>10:35 AM</span>
          </div>

          <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '12px 16px', borderRadius: '16px 16px 16px 0', border: '1px solid rgba(255,255,255,0.1)' }}>
              Awesome. Ready for the match tonight?
            </div>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '4px', display: 'block' }}>10:42 AM</span>
          </div>
        </div>

        {/* Message Input */}
        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.4)', padding: '8px 16px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <input 
              type="text" 
              placeholder="Message Elena_R..." 
              style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', outline: 'none', padding: '8px 0' }}
            />
            <button style={{ background: 'var(--color-blue)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-black)' }}>
              <Send size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Messages;
