import React, { useState } from 'react';

function SearchPage({ results }) {
    const [selectForm, setSelectForm] = useState("");
    const [selectStrength, setSelectStrength] = useState("");
    const [selectPacking, setSelectPacking] = useState("");

    return (
        <div>
            {/* Search page/Result */}
            {results && results.length > 0 ?
                (<div className='overflow-hidden'>
                    <div className='result h-[1px] container mx-auto bg-gray-400 my-10'></div>
                    <div className='flex gap-8 flex-col'>
                        <div className='container mx-auto rounded-lg shadow-xl bg-gradient-to-r from-white via-white to-green-100 flex flex-row flex-wrap h-48'>
                            <div className='left flex-1 flex flex-col justify-evenly mx-10 flex-wrap'>
                                <p className='text-lg flex justify-between w-[55%]'>From :
                                    <span className={`cursor-pointer px-2 py-1 text-sm rounded ${selectForm === 'Tablet1' ? 'border-2 border-green-900 shadow shadow-green-400 font-bold' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectForm('Tablet1')}>Tablet1</span>
                                    <span className={`cursor-pointer px-2 py-1 text-sm rounded ${selectForm === 'Tablet2' ? 'border-2 border-green-900 shadow shadow-green-400' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectForm('Tablet2')}>Tablet2</span>
                                </p>
                                <p className='text-lg flex justify-between w-[55%]'>Strength :
                                    <span className={`cursor-pointer px-2 py-1 text-sm rounded ${selectStrength === '100mg' ? 'border-2 border-green-900 shadow shadow-green-400' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectStrength('100mg')}>100mg</span>
                                    <span className={`cursor-pointer px-2 py-1 text-sm rounded ${selectStrength === '500mg' ? 'border-2 border-green-900 shadow shadow-green-400' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectStrength('500mg')}>500mg</span>
                                </p>
                                <p className='text-lg flex justify-between w-[55%]'>Packaging :
                                    <span className={`cursor-pointer px-2 py-1 text-sm rounded ${selectPacking === '5 strips' ? 'border-2 border-green-900 shadow shadow-green-400' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectPacking('5 strips')}>5 strips</span>
                                    <span className={`cursor-pointer px-2 py-1 text-sm rounded ${selectPacking === '10 strips' ? 'border-2 border-green-900 shadow shadow-green-400' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectPacking('10 strips')}>10 strips</span>
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
                </div>) :
                (
                    <div className='heading flex items-center justify-center h-[90vh]'>
                        <h1 className='text-xl md:text-2xl font-semibold text-zinc-500'>"Find medicines with amazing discount"</h1>
                    </div>
                )
            }
        </div >
    )
}

export default SearchPage;
