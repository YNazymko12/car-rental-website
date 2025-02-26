// import './App.css'
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
