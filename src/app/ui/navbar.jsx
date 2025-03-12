import Logo from "@/app/ui/logo"
import Search from "@/app/ui/search"

export default function Navbar() {
  return (
  <header className="w-full">
    <nav className="flex p-4 flex-col gap-4 md:flex-row md:items-center w-full max-w-[1440] mx-auto">
      <Logo/>
      <Search/>
    </nav>
  </header>
  )
}