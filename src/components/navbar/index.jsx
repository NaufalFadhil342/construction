import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdMenu, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { ActiveLink, LinkNavbar } from './Link';
import Search from './search';
import { Link } from 'react-scroll';

const Navbar = ({ isScrolled }) => {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`navbar ${isScrolled ? 'fixed' : ''}`}>
      <div className="logo">
        <h1 onClick={() => navigate('/')}>Arsan</h1>
      </div>
      <nav className="navlink">
        <LinkNavbar onClose={() => setIsNavbar(false)} />
      </nav>
      {isNavbar && (
        <nav className="activeLink">
          <ActiveLink onClose={() => setIsNavbar(false)} />
        </nav>
      )}
      <Search search={search} setSearch={setSearch} isSearchOpen={isSearch} />
      <div className={`navbarToggle ${isNavbar ? 'active' : ''}`} onClick={() => setIsNavbar(!isNavbar)}>
        <MdMenu />
      </div>
      <div className={`searchToggle ${isSearch ? 'active' : ''}`} onClick={() => setIsSearch(!isSearch)}>
        <MdSearch />
      </div>
      <div className="toTop">
        <Link to="support" smooth={true} duration={1000}>
          <MdOutlineKeyboardDoubleArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
