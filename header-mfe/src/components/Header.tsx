import type React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>Micro Frontend Header</h1>
      <nav>
        <a href="/" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
        <a href="/about" style={{ color: 'white' }}>About</a>
      </nav>
    </header>
  );
};

export default Header; 