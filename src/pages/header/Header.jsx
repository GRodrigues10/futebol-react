import React, { useState } from "react";
import { HeaderStyle } from "./Style";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <HeaderStyle>
      <nav>
        <div className="title">
          <h1>
            <span>⚽</span> Futebol Clube
          </h1>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to={'/'} onClick={() => setMenuOpen(false)}>Início</Link>
          </li>
          <li>
            <Link to={'/campeonatos'} onClick={() => setMenuOpen(false)}>Campeonatos</Link>
          </li>
          <li>
            <Link to={'/partidas'} onClick={() => setMenuOpen(false)}>Partidas</Link>
          </li>
          <li>
            <Link to = {'/times'} onClick={() => setMenuOpen(false)}>Times</Link>
          </li>
          <li>
            <Link to={'/sobre'} onClick={() => setMenuOpen(false)}>Sobre</Link>
          </li>
        </ul>
        <div
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
