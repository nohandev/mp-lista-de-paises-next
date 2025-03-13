import { fetchCountrieByName } from '@/app/lib/data'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import Image from 'next/image';

export default async function page({params}) {

  const { id } = await params

  const data = await fetchCountrieByName(id)


  return (
  <section className='max-w-[1440] mx-auto mt-[2em]'>
    <h1 className='text-neutral-300 font-[600] text-4xl text-center'>
      {data.translations.por['common']}
    </h1>
    <Link href='/'>
      <div className='flex items-center gap-2 cursor-pointer text-neutral-400 px-4'>
        <ArrowLeftCircleIcon className='w-[24] h-[24]'/>
        <span className='text-2xl'>Voltar</span> 
      </div>
    </Link>

    <div className='flex flex-col p-6 gap-4 justify-around md:items-center md:flex-row'>
      <div className='flex-[1]'>
        <ul>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>Capital: <span className='text-neutral-400 font-[400]'>{data.capital}</span></li>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>Continente: <span className='text-neutral-400 font-[400]'>{data.continents}</span></li>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>População: <span className='text-neutral-400 font-[400]'>{data.population}</span></li>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>Línguas Faladas: </li>
        </ul>

        <div className='mt-3 flex gap-2 flex-wrap'>
          {Object.values(data.languages).map((language, index) => (
            <span 
            key={index}
            className='bg-indigo-700 text-neutral-300 py-1 px-4 text-xl rounded-2xl font-[600]'>
              {language}
            </span>
          ))}
          
        </div>
      </div>

      <div className='flex-[1]'>
        <Image
        width={230}
        height={180}
        src={data.flags['svg']}
        alt={data.flags['alt'] 
          ? data.flags['alt']
          : 'Flag of countrie'}
        className='apect-4/3 object-cover w-[80%] mx-auto'/>
      </div>
    </div>
  </section>
  );
}
