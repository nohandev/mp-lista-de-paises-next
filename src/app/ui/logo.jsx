import Link from 'next/link'

import Image from "next/image"

export default function Logo() {
  return (
  <Link href='/' className='flex-[1]' prefetch>
    <div className="flex items-center gap-[1em]">
      <Image
      src='/Logo.svg'
      alt="Logo Principal"
      width={55}
      height={55}
      priority/>
      <h1 className="text-neutral-300 h-fit text-lg font-[700]">Países do mundo</h1>
    </div>
  </Link>
  )
}