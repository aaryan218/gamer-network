import { communities } from "../data/content";

function CommunitySection() {
  return (
    <section className="community" aria-label="Community highlights">
      <div className="section-head">
        <h2>Find your community</h2>
        <p>Join active player groups based on your favorite genres, games, and goals.</p>
      </div>

      <div className="community__list">
        {communities.map((community) => (
          <article key={community.name} className="community__item">
            <div>
              <h3>{community.name}</h3>
              <p>{community.members}</p>
            </div>
            <button type="button" className="btn btn--ghost">
              Join
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CommunitySection;
