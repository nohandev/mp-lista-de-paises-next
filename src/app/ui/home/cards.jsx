import { fetchAllCountries } from "@/app/lib/data"

import Link from 'next/link'
import Image from 'next/image'

export default async function Card() {

  const data = await fetchAllCountries()

  return (
    <>
      {data
      .slice(0, 15)
      .map((countrie, index) => (
        <Link 
        href={`/${countrie.name['common']}/details`}
        key={index}
        className="transition duration-300 ease-in-out hover:scale-[0.9]">
          <div className="flex flex-col justify-center items-center">
            <Image
            src={countrie.flags['svg']}
            alt={countrie.flags['alt'] 
              ? countrie.flags['alt'] 
              : `${countrie.name['official']} Flag`}
            width={250}
            height={130}
            layout=""
            className="w-auto h-auto object-cover aspect-3/2 rounded-xl"/>
            <p className="text-neutral-300 text-xl mt-3 text-center">
              {countrie.translations.por.common}
            </p>
          </div>
        </Link>
      ))
      }
    </>              
  )
}