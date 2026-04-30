const links = ["Home", "Discover", "Profile", "Messages", "Settings"];

function Sidebar() {
  return (
    <aside className="sidebar card" aria-label="Primary navigation">
      <nav>
        <p className="sidebar__label">Menu</p>
        <ul className="sidebar__list">
          {links.map((link) => (
            <li key={link}>
              <a className={`sidebar__link${link === "Profile" ? " sidebar__link--active" : ""}`} href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
