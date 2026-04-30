import { stats } from "../data/content";

function StatsGrid() {
  return (
    <section className="stats-grid" aria-label="Platform stats">
      {stats.map((item) => (
        <article key={item.label} className="stats-grid__card">
          <p className="stats-grid__value">{item.value}</p>
          <p className="stats-grid__label">{item.label}</p>
        </article>
      ))}
    </section>
  );
}

export default StatsGrid;
