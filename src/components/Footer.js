import React from 'react';

function Footer() {
  return (
    <footer>
      <nav
        className="footer-nav"
        aria-label="Main Navigation"
        role="navigation"
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Women's</a>
          </li>
          <li>
            <a href="#">Mens's</a>
          </li>
          <li>
            <a href="#">On the Street</a>
          </li>
          <li>
            <a href="#">The Catwalk</a>
          </li>
          <li>
            <a href="#">AdWatch</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Tips</a>
          </li>
        </ul>
      </nav>
      <h6>&copy; 2013 Valet Indutries, Inc</h6>
    </footer>
  );
}

export default Footer;