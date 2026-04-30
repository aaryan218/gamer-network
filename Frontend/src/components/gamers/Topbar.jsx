import { primaryNav } from "../data/mockData";

function Topbar() {
  return (
    <header className="gln-topbar card">
      <div className="gln-brand">GameLink</div>

      <label className="gln-search" aria-label="Search players or jobs">
        <span>⌕</span>
        <input type="search" placeholder="Search players, roles, communities" />
      </label>

      <nav className="gln-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <a href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Topbar;
