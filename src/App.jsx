import React from 'react';
import SearchPage from './Component/SearchPage';

function App() {
  return (
    <div className='h-screen bg-slate-100 mx-auto'>
      <SearchPage />
      <div className='flex items-center justify-center h-[90%]'>
        <h1 className='text-xl md:text-2xl font-semibold text-zinc-500'>"Find medicines with amazing discout"</h1>
      </div>
    </div>
  )
}

export default App