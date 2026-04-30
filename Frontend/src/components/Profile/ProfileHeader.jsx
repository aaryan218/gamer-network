const defaultAvatar =
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=320&h=320&fit=crop";

function ProfileHeader({ user = {}, onEdit }) {
  const {
    avatar = defaultAvatar,
    username = "Player One",
    bio = "Competitive gamer, community builder, and weekend streamer.",
  } = user;

  return (
    <section className="profile-card profile-header">
      <div className="profile-header__identity">
        <img className="profile-header__avatar" src={avatar} alt={username} />
        <div className="profile-header__copy">
          <p className="eyebrow">Profile</p>
          <h1 className="profile-header__name">{username}</h1>
          <p className="profile-header__bio">{bio}</p>
        </div>
      </div>

      <button type="button" className="button button-primary" onClick={onEdit}>
        Edit Profile
      </button>
    </section>
  );
}

export default ProfileHeader;