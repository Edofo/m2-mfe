import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/global.scss';

const Header = React.lazy(() => import('headerApp/Header'));

const App: React.FC = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      <div className="container">
        <h2>Shell Application Content</h2>
        <p>This is the main content of the shell application.</p>
      </div>
    </div>
  );
};

export default App; 