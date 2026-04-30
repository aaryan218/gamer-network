import { features } from "../data/content";

function FeatureCards() {
  return (
    <section className="feature-section" aria-label="Core features">
      <div className="section-head">
        <h2>Everything you need for your gaming social presence</h2>
        <p>Modular components designed for profile, feed, and future chat experiences.</p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
