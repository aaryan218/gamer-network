function GameTags({ games = [] }) {
  if (!games.length) {
    return null;
  }

  return (
    <section className="profile-card profile-section">
      <div className="section-heading">
        <h2 className="section-title">Favorite Games</h2>
        <p className="section-description">A quick view of the games this player follows.</p>
      </div>

      <div className="tag-list" aria-label="Favorite games">
        {games.map((game) => (
          <span key={game} className="tag-pill">
            {game}
          </span>
        ))}
      </div>
    </section>
  );
}

export default GameTags;