import React from 'react';
import { FiSearch } from "react-icons/fi";


function SearchPage() {
    return (
        <>
            <div className='container h-20 mx-auto flex items-center justify-center relative py-12'>
                <FiSearch className='text-2xl h-10 absolute left-10 rounded-full' />
                <input
                    className='h-14 w-full rounded-full text-[18px] font-semibold px-20 shadow-2xl outline-none '
                    type="text"
                    placeholder='Type your medicine name here'
                />
                <button className='absolute right-10 text-[18px] py-6 px-6 text-blue-800 font-bold'>Search</button>
            </div>
            <br className='' />
        </>
    )
}

export default SearchPage;