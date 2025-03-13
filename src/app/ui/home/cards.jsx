'use client'

import { fetchAllCountries } from "@/app/lib/data"
import Link from 'next/link'

import { useContext } from "react"
import { Context } from '@/app/context/context'


const data = await fetchAllCountries()

export function Card({name, flags ,translations}) {
  return (
    <Link 
    href={`/${name['common']}/details`}
    className="transition duration-300 ease-in-out hover:scale-[0.9]">
      <div className="flex flex-col justify-center items-center">
        <img
        src={flags['png']}
        alt={flags['alt'] 
          ? flags['alt'] 
          : `${name['official']} Flag`}
        className="aspect-4/3 object-cover rounded-xl max-w-[270px] w-full"/>
        <p className="text-neutral-300 text-xl mt-3 text-center">
          {translations.por.common}
        </p>
      </div>
    </Link>             
  )
}

export default function CardWrapper() {

  const { sortLetter, sortContinent, sortSearch } = useContext(Context)

  return (
    <main>
      <section className="gap-4 mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        {data
          .filter(({translations}) => sortSearch === '' 
            ? data 
            : translations.por['common'].toUpperCase().includes(sortSearch.toUpperCase()))
          .sort((a, b) =>           
            sortLetter === 'growing'  
            ? a.translations.por['common'].localeCompare(b.translations.por['common'])
            : b.translations.por['common'].localeCompare(a.translations.por['common'])
          )
          .filter(({continents}) => 
            sortContinent === 'All' 
            ? continents 
            : continents[0].includes(sortContinent))
          .slice(0, 15)
          .map(({name, flags ,translations}, index) => (
            <Card 
            name={name}
            flags={flags}
            translations={translations}
            key={index}
            />
        ))
        }
      </section>
    </main>  
  )
  
}