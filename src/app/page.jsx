'use client'

import CardWrapper from "@/app/ui/home/cards"
import FilterCountries from "@/app/ui/home/filter"

import { Context } from "@/app/context/context"

import { useState } from "react"

export default function Page() {

  const [sortLetter, setSortLetter] = useState('growing')
  const [sortContinent, setSortContinent] = useState('All')
  const [sortSearch, setSortSearch] = useState('')

  return (
  <main className="max-w-[1440] px-4 mx-auto">
  <Context.Provider value={{
    sortLetter, setSortLetter, 
    sortContinent, setSortContinent, 
    sortSearch, setSortSearch}}>
    <FilterCountries/>

    <CardWrapper/>
  </Context.Provider>
  </main>
  );
}
