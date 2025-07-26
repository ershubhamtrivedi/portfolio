import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="headerContainer">
      <Link to="/" className="para">
        <h1 className="capitalize">Shubham</h1>
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`options ${menuOpen ? 'showMenu' : ''}`}>
        <Link to="/" className="para" onClick={() => setMenuOpen(false)}>
          <p>Home</p>
        </Link>
        <Link to="/education" className="para" onClick={() => setMenuOpen(false)}>
          <p>Education</p>
        </Link>
        <Link to="/projects" className="para" onClick={() => setMenuOpen(false)}>
          <p>Projects</p>
        </Link>
        <Link to="/certificates" className="para" onClick={() => setMenuOpen(false)}>
          <p>Certificates</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
