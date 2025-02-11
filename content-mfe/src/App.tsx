import type React from 'react';
import Introduction from './components/Introduction';
import CoreConcepts from './components/CoreConcepts';
import Architecture from './components/Architecture';
import "./styles/content.scss"

const App: React.FC = () => {
  return (
    <div className="k8s-content">
      <Introduction />
      <CoreConcepts />
      <Architecture />
    </div>
  );
};

export default App; 