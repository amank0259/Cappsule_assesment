import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";


function SearchPage() {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState();

    return (
        <>
            <div className='container h-20 mx-auto flex items-center justify-center relative py-12'>
                <FiSearch className='text-2xl h-10 absolute left-10 rounded-full' />
                <input
                    onChange={(e) => setSearch(e.target.value)} value={search}
                    className='h-14 w-full rounded-full text-[18px] font-semibold px-20 shadow-2xl outline-none '
                    type="text"
                    placeholder='Type your medicine name here'
                />
                <button className='absolute right-10 text-[18px] py-2 px-6 text-blue-800 font-bold'>Search</button>
            </div>
            {search.length == 0 && (<div className='flex items-center justify-center h-[90%]'>
                <h1 className='text-xl md:text-2xl font-semibold text-zinc-500'>"Find medicines with amazing discout"</h1>
            </div>)}
            {search.length > 0 && (<div className='overflow-hidden'><div className='h-[1px] container mx-auto bg-gray-400 my-10' ></div>
                <div className='flex gap-8 flex-col'>
                    <div className='container mx-auto rounded-lg shadow-xl bg-gradient-to-r from-white via-white to-green-100 flex flex-row flex-wrap h-48'>
                        <div className='left border-red-600 border-2 flex-1 flex flex-col justify-evenly mx-10 flex-wrap'>
                            <p className='text-lg flex justify-between w-[55%]'>From : <span>Tablet</span><span>Tablet</span></p>
                            <p className='text-lg flex justify-between w-[55%]'>Strength : <span>100mg</span><span>100mg</span></p>
                            <p className='text-lg flex justify-between w-[55%]'>Packaging : <span>5 strips</span><span>5 strips</span></p>
                        </div>
                        <div className='center border-green-800 border-2 flex-1 flex flex-col justify-evenly mx-10 flex-wrap'></div>
                        <div className='right border-yellow-600 border-2 flex-1 flex flex-col justify-evenly mx-10 flex-wrap'></div>
                    </div>
                </div>

            </div>)}
        </>
    )
}

export default SearchPage;