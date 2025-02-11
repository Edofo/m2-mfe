import type React from 'react';
import '../styles/header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Micro Frontend Header</h1>
        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 