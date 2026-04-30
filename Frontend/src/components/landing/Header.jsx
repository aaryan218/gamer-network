import { navLinks } from "../data/content";

function Header() {
  return (
    <header className="landing-header">
      <div className="brand">Gamer Network</div>

      <nav className="landing-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link} href="#" className="landing-nav__link">
            {link}
          </a>
        ))}
      </nav>

      <button className="btn btn--ghost" type="button">
        Sign In
      </button>
    </header>
  );
}

export default Header;
