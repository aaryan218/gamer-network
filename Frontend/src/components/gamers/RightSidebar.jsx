import { jobOpenings, suggestions, trendingTopics } from "../data/mockData";

function RightSidebar() {
  return (
    <aside className="gln-right" aria-label="Opportunities and network">
      <section className="gln-panel">
        <h3>Recommended Jobs</h3>
        <ul className="gln-list">
          {jobOpenings.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong>
              <p>{job.company}</p>
              <span>{job.mode}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="gln-panel">
        <h3>People to connect</h3>
        <ul className="gln-list">
          {suggestions.map((person) => (
            <li key={person.id}>
              <strong>{person.name}</strong>
              <p>{person.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="gln-panel">
        <h3>Trending in gaming</h3>
        <div className="gln-tags">
          {trendingTopics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default RightSidebar;
