import { useContext } from 'react';
import { Context } from '@/app/context/context';

import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export function SortByContinent () {

  const { setSortContinent } = useContext(Context)

  const options = [
      { name: "Todos", continent: "All"},
      { name: "América do Sul", continent: "South America" },
      { name: "América do Norte", continent: "North America" },
      { name: "Europa", continent: "Europe" },
      { name: "Ásia", continent: "Asia" },
      { name: "Oceania", continent: "Oceania" },
      { name: "África", continent: "Africa" }
    ];

  return (
    <div className="flex flex-col gap-1 items-start lg:flex-row lg:gap-4 lg:items-center flex-[1]">
        <label 
        htmlFor='contnents'
        className="text-neutral-300 text-[clamp(20px,1.6vw,28px)]">Continente:</label>
        <select 
        name="contnents" 
        id="contnents"
        className="bg-white rounded-md outline-none p-1 text-[clamp(20px,1.4vw,28px)] cursor-pointer"
        onChange={e => setSortContinent(e.target.value)}>
          {options.map(({name, continent}, index) => (
            <option 
            value={continent}
            key={index}>
              {name}
            </option>
          ))
          }
        </select>
      </div>
  )
}

export function SortByLetter() {

  const { sortLetter, setSortLetter } = useContext(Context)

  const haldleChangeSortUp = () => setSortLetter(sortLetter === 'decreasing' ? 'growing' : sortLetter)
  const haldleChangeSortDown = () => setSortLetter(sortLetter === 'growing' ? 'decreasing' : sortLetter)

  return (
  <div className='flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4'>
    <p className='text-neutral-300 text-[clamp(20px,1.6vw,28px)]'>Ordem Alfabética:</p>
    <div className='flex gap-4'>
      <button 
      className='bg-white rounded-md p-1 cursor-pointer transition transition-duration-200 ease-in hover:bg-neutral-300'
      onClick={haldleChangeSortUp}>
        {<ArrowUpCircleIcon className='size-[28]'/>}
      </button>
      <button 
      className='bg-white rounded-md p-1 cursor-pointer transition transition-duration-200 ease-in hover:bg-neutral-300'
      onClick={haldleChangeSortDown}>
        {<ArrowDownCircleIcon className='size-[28]'/>}
      </button>
    </div>
  </div>
  )
}