import React from 'react';
import Header from './Component/Header';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen bg-slate-100 mx-auto overflow-y-scroll'>
      <Routes>
        <Route path='*' element={<Header />} />
      </Routes>
    </div>
  )
}

export default App