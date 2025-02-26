// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
