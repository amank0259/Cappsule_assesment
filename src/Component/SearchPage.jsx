import React, { useState } from 'react';

function SearchPage({ results }) {
    const { saltSuggestions, medicineSuggestions } = results;
    const [selectForm, setSelectForm] = useState("");
    const [selectStrength, setSelectStrength] = useState("");
    const [selectPacking, setSelectPacking] = useState("");

    return (
        <div>
            {/* Search page/Result */}
            {saltSuggestions && saltSuggestions.length > 0 && (
                <div className='overflow-hidden'>
                    <div className='result h-[1px] container mx-auto bg-gray-400 my-10'></div>
                    <div className='flex gap-8 flex-col'>
                        <div className='container mx-auto rounded-lg shadow-xl bg-gradient-to-r from-white via-white to-green-100 flex flex-row flex-wrap h-48'>
                            {saltSuggestions.map((salt, index) => (
                                <div key={index} className='left flex-1 flex flex-col justify-evenly mx-10 flex-wrap'>
                                    <p className='text-lg flex justify-between w-[55%]'>From :
                                        {salt.available_forms.map((form, formIndex) => (
                                            <span key={formIndex} className={`cursor-pointer px-2 py-1 text-sm rounded ${selectForm === form ? 'border-2 border-green-900 shadow shadow-green-400 font-bold' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectForm(form)}>{form}</span>
                                        ))}
                                    </p>
                                    <p className='text-lg flex justify-between w-[55%]'>Strength :
                                        {salt.available_forms.find(form => form === selectForm)?.Strengths.map((strength, strengthIndex) => (
                                            <span key={strengthIndex} className={`cursor-pointer px-2 py-1 text-sm rounded ${selectStrength === strength ? 'border-2 border-green-900 shadow shadow-green-400 font-bold' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectStrength(strength)}>{strength}</span>
                                        ))}
                                    </p>
                                    <p className='text-lg flex justify-between w-[55%]'>Packaging :
                                        {salt.available_forms.find(form => form === selectForm)?.Packings.map((packing, packingIndex) => (
                                            <span key={packingIndex} className={`cursor-pointer px-2 py-1 text-sm rounded ${selectPacking === packing ? 'border-2 border-green-900 shadow shadow-green-400 font-bold' : 'border-dashed border-2 border-zinc-400'}`} onClick={(e) => setSelectPacking(packing)}>{packing}</span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                            <div className='center flex-1 flex flex-col text-center mx-10 flex-wrap'>
                                <div className='my-auto'>
                                    {medicineSuggestions && (
                                        <>
                                            <h3 className='text-lg font-semibold'>{medicineSuggestions.name_with_short_pack}</h3>
                                            <p>{selectForm} | {selectStrength} | {selectPacking}</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className='right flex-1 flex flex-col justify-evenly mx-10 flex-wrap'>
                                <h1 className='text-center text-4xl font-bold'>From $80</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!saltSuggestions || saltSuggestions.length === 0 && (
                <div className='heading flex items-center justify-center h-[90vh]'>
                    <h1 className='text-xl md:text-2xl font-semibold text-zinc-500'>"Find medicines with amazing discount"</h1>
                </div>
            )}
        </div>
    )
}

export default SearchPage;