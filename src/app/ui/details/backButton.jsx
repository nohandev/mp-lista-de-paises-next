import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

export default function BackButton() {
  return (
    <Link href='/'>
      <div className='flex items-center gap-2 cursor-pointer text-neutral-300 px-4'>
        <ArrowLeftCircleIcon className='w-[24] h-[24]'/>
        <span className='text-2xl'>Voltar</span> 
      </div>
    </Link>
  )
}