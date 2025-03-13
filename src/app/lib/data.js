export async function fetchAllCountries() {
  try {
    const request = await fetch('https://restcountries.com/v3.1/all', {
      next: {revalidate: 3600}
    })

    if (!request.ok) {
      throw new Error('Não foi possivel obter os dados')
    }

    if (request.ok) {
      return await request.json()
    }
  } catch (error) {
    console.error(error)
  }
}

export async function fetchCountrieByName(name) {
  try {
    const request = await fetch(`https://restcountries.com/v3.1/name/${name}`)

    if (!request.ok) {
      throw new Error('Não foi possível obter os dados | 404')
    }

    const data = await request.json()

    return await data.reduce((acc, item) => {
      acc = item
      return acc
    }, {})
  } catch (error) {
    console.error(error)
  }
}