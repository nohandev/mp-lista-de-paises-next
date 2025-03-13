import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { useContext } from 'react'
import { Context } from '@/app/context/context'

export default function Search() {

  const { setSortSearch } = useContext(Context)

  return (
    <form className='relative flex max-w-[400] w-full'>
      <input 
      type="text"
      className='bg-white text-lg border-none rounded-md py-1 px-2 w-full focus:outline-2 focus:outline-blue-600'
      name='countries'
      onChange={e => setSortSearch(e.target.value.trim())}/>
      <button 
      type='submit'
      className='absolute top-1/2 -translate-y-1/2 right-2'>
      <MagnifyingGlassIcon className='w-[24] h-[24] text-neutral-700'/>
      </button>
    </form>
  )
}


