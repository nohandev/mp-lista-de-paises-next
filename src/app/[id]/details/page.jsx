import { fetchCountrieByName } from '@/app/lib/data'
import BackButton from '@/app/ui/details/backButton'
import CountrieDetails from '@/app/ui/details/countrieDetails'

export default async function page({params}) {

  const { id } = await params

  const data = await fetchCountrieByName(id)

  return (
  <section className='max-w-[1440] mx-auto mt-[2em]'>
    <h1 className='text-neutral-300 font-[600] text-4xl text-center'>
      {data.translations.por['common']}
    </h1>

    <BackButton/>

    <CountrieDetails data={data} />
  </section>
  );
}
