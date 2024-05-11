import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchPage from "./SearchPage";

function Header() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();


    // handle the search functionality
    const handleSearch = () => {
        if (search.trim() === "") {
            setResults([]);      //to get the result
            navigate("/");      //to get back to main page
        } else {
            setResults([search]);
            navigate(`/search/${encodeURIComponent(search)}`);   //to navigate search page
        }
    };

    // hendle enter button to search
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
    }, [search]);


    // Function to clear the search 
    const clearSearch = () => {
        setSearch("");
        setResults([]);
        navigate("/");
    };

    return (
        <>
            {/* Search bar */}
            <div className='container h-20 mx-auto flex items-center justify-center relative py-12'>
                {/* Show and hide search icon and navigate to main page */}
                {search.length === 0 ? (
                    <FiSearch className='text-2xl h-10 absolute left-10 rounded-full' />
                ) : (
                    <MdArrowBack className='text-2xl h-10 absolute left-10 rounded-full cursor-pointer' onClick={clearSearch} />
                )}
                {/* Search input */}
                <input
                    onChange={({ target: { value } }) => setSearch(value)}
                    onKeyDown={handleKeyPress}
                    value={search}
                    className='h-14 w-full rounded-full text-[18px] font-semibold px-20 shadow-2xl outline-none '
                    type="text"
                    placeholder='Type your medicine name here'
                />
                <button onClick={handleSearch} className='absolute right-10 text-[18px] py-2 px-6 text-blue-800 font-bold'>Search</button>
            </div>
            {/* Show results */}
            {results.length === 0 && (
                <div className='flex items-center justify-center h-[90%]'>
                    <h1 className='text-xl md:text-2xl font-semibold text-zinc-500'>"Find medicines with amazing discount"</h1>
                </div>
            )}
            {/* route search page */}
            <Routes>
                <Route path="/search/:query" element={<SearchPage results={results} />} />
            </Routes>
        </>
    );
}

export default Header;