import { gamerProfile } from "../data/mockData";

function LeftSidebar() {
  return (
    <aside className="gln-panel gln-profile" aria-label="Profile summary">
      <img src={gamerProfile.avatar} alt={gamerProfile.name} className="gln-profile__avatar" />
      <h2>{gamerProfile.name}</h2>
      <p>{gamerProfile.title}</p>
      <p>{gamerProfile.location}</p>

      <div className="gln-profile__stats">
        <div>
          <span>Followers</span>
          <strong>{gamerProfile.followers}</strong>
        </div>
        <div>
          <span>Connections</span>
          <strong>{gamerProfile.connections}</strong>
        </div>
        <div>
          <span>Profile Views</span>
          <strong>{gamerProfile.profileViews}</strong>
        </div>
      </div>

      <button type="button" className="gln-btn gln-btn--primary">
        Update Profile
      </button>
    </aside>
  );
}

export default LeftSidebar;
