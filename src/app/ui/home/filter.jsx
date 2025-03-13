import Search from '@/app/ui/search'
import { SortByLetter, SortByContinent } from '@/app/ui/sorts';

export default function FilterCountries() {
  return (
    <section className='flex flex-col gap-4 justify-between lg:flex-row'>
      <SortByContinent/>

      <div className='flex-[1]'>
        <Search/>
      </div>

      <SortByLetter/>
    </section>
  )
}