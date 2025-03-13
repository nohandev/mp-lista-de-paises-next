import Link from 'next/link'

import Image from "next/image"

export default function Logo() {
  return (
  <div>
    <Link href='/' className='flex items-center gap-[1em]' prefetch>
      <Image
      src='/Logo.svg'
      alt="Logo Principal"
      width={55}
      height={55}
      priority/>
      <h1 className="text-neutral-300 h-fit text-lg font-[700]">Países do mundo</h1>
    </Link>
  </div>
  )
}