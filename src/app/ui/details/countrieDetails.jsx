import formatNumbers from '@/app/utils/utils';
import Image from 'next/image';

export default function CountrieDetails({ data }) {
  return (
    <div className='flex flex-col p-6 gap-4 justify-around md:items-center md:flex-row'>
      <div className='flex-[1]'>
        <ul>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>Capital: <span className='text-neutral-400 font-[400]'>{data.capital}</span></li>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>Continente: <span className='text-neutral-400 font-[400]'>{data.continents}</span></li>
          <li className='text-neutral-300 text-[clamp(24px,3vw,32px)] font-[600]'>População: <span className='text-neutral-400 font-[400]'>{formatNumbers(data.population)}</span></li>
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
        className='apect-3/2 object-cover w-full mx-auto rounded-xl'/>
      </div>
    </div>
  )
}