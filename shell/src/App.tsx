import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/global.scss';

const Header = React.lazy(() => import('headerApp/Header'));
const Content = React.lazy(() => import('contentApp/Content'));

const App: React.FC = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
          <Content />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App; 