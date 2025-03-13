import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <form className='flex-[1] relative flex max-w-[400px] mx-auto w-full'>
      <input 
      type="text"
      className='bg-white text-lg border-none rounded-md py-1 px-2 w-full focus:outline-2 focus:outline-blue-600'
      name='countries'/>
      <button 
      type='submit'
      className='absolute top-1/2 -translate-y-1/2 right-2'>
      <MagnifyingGlassIcon className='w-[24] h-[24] text-neutral-700'/>
      </button>
    </form>
  )
}


