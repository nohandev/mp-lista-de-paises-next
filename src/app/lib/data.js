export async function fetchAllCountries() {
  try {
    const request = await fetch('https://restcountries.com/v3.1/all')

    if (!request.ok) {
      throw new Error('Não foi possivel obter os dados')
    }

    return await request.json()
    
  } catch (error) {
    console.error(error)
  }
}