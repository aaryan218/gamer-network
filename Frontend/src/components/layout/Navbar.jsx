function Navbar() {
  return (
    <header className="topbar card">
      <div>
        <p className="eyebrow">Gamer Network</p>
        <h2 className="topbar__title">Profile Dashboard</h2>
      </div>

      <label className="search-box" aria-label="Search the network">
        <span className="search-box__icon">⌕</span>
        <input type="search" placeholder="Search players, games, or posts" />
      </label>
    </header>
  );
}

export default Navbar;
