import React, { useState } from 'react';

function SearchPage({ results }) {
    const [selectForm, setSelectForm] = useState("");
    const [selectStrength, setSelectStrength] = useState("");
    const [selectPacking, setSelectPacking] = useState("");

    console.log(selectForm);

    return (
        <div>
            {/* Search page/Result */}
            <div className='overflow-hidden'>
                <div className='h-[1px] container mx-auto bg-gray-400 my-10' ></div>
                <div className='flex gap-8 flex-col'>
                    <div className='container mx-auto rounded-lg shadow-xl bg-gradient-to-r from-white via-white to-green-100 flex flex-row flex-wrap h-48'>
                        <div className='left flex-1 flex flex-col justify-evenly mx-10 flex-wrap'>
                            <p className='text-lg flex justify-between w-[55%]'>From :
                                <span className='' onClick={(e) => setSelectForm(e.target.textContent)}>Tablet1</span>
                                <span onClick={(e) => setSelectForm(e.target.textContent)}>Tablet2</span>
                            </p>
                            <p className='text-lg flex justify-between w-[55%]'>Strength :
                                <span onClick={(e) => setSelectStrength(e.target.textContent)}>100mg</span>
                                <span onClick={(e) => setSelectStrength(e.target.textContent)}>500mg</span>
                            </p>
                            <p className='text-lg flex justify-between w-[55%]'>Packaging :
                                <span onClick={(e) => setSelectPacking(e.target.textContent)}>5 strips</span>
                                <span onClick={(e) => setSelectPacking(e.target.textContent)}>10 strips</span>
                            </p>
                        </div>
                        <div className='center flex-1 flex flex-col text-center mx-10 flex-wrap'>
                            <div className='my-auto'>
                                <h3 className='text-lg font-semibold'>{results[0]}</h3>
                                <p>{selectForm} | {selectStrength} | {selectPacking}</p>
                            </div>
                        </div>
                        <div className='right flex-1 flex flex-col justify-evenly mx-10 flex-wrap'>
                            <h1 className='text-center text-4xl font-bold'>From $80</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;