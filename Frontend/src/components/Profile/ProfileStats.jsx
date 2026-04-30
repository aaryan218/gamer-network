function formatCount(value) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }

  return `${value}`;
}

function ProfileStats({ stats = {} }) {
  const {
    posts = 0,
    followers = 0,
    following = 0,
  } = stats;

  const items = [
    { label: "Posts", value: posts },
    { label: "Followers", value: followers },
    { label: "Following", value: following },
  ];

  return (
    <section className="profile-card profile-stats" aria-label="Profile stats">
      {items.map((item) => (
        <article key={item.label} className="profile-stats__item">
          <strong className="profile-stats__value">{formatCount(item.value)}</strong>
          <span className="profile-stats__label">{item.label}</span>
        </article>
      ))}
    </section>
  );
}

export default ProfileStats;