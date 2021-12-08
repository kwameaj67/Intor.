import './App.css';
import React, { Suspense } from 'react'
const Home = React.lazy(() => import('./pages/Home/Home'))

function App() {
  return (
    <div>
        <Suspense fallback={
          <div className="App">
            <div className="loader">
              <h1>intor.</h1>
            </div>
          </div>
        }>
          <Home />
        </Suspense>
    </div>
  );
}

export default App;
