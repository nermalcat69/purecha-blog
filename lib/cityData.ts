import citiesJson from '@/data/cities.json'

type CityData = {
  city: string
  state: string
  nearbyAreas: string[]
  teaSpecialty: string
  popularSpots: string[]
  teaCulture: string
  bestTimeForChai: string
  localBrews: string[]
  faqs: { question: string; answer: string }[]
}

type CitiesMap = Record<string, Record<string, CityData>>

const citiesData = citiesJson as CitiesMap

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

export function getAllCities(): CitiesMap {
  return citiesData
}

export function getCityInfoFromSlugs(stateSlug: string, citySlug: string): CityData | null {
  const allCities = getAllCities()
  const stateEntry = Object.entries(allCities).find(
    ([state]) => slugify(state) === stateSlug
  )
  if (!stateEntry) return null
  const [, cities] = stateEntry
  const cityEntry = Object.entries(cities).find(
    ([city]) => slugify(city) === citySlug
  )
  if (!cityEntry) return null
  return cityEntry[1]
}

export function getStateCities(stateSlug: string): Record<string, CityData> | null {
  const allCities = getAllCities()
  const stateEntry = Object.entries(allCities).find(
    ([state]) => slugify(state) === stateSlug
  )
  if (!stateEntry) return null
  return stateEntry[1]
}

export function getAllCityPages(): { state: string; city: string }[] {
  const allCities = getAllCities()
  const pages: { state: string; city: string }[] = []
  for (const [state, cities] of Object.entries(allCities)) {
    for (const city of Object.keys(cities)) {
      pages.push({ state: slugify(state), city: slugify(city) })
    }
  }
  return pages
}

export function getRelatedCities(stateSlug: string, currentCitySlug: string): CityData[] {
  const cities = getStateCities(stateSlug)
  if (!cities) return []
  return Object.entries(cities)
    .filter(([city]) => slugify(city) !== currentCitySlug)
    .map(([, data]) => data)
    .slice(0, 3)
}

export const stateList = [
  { name: 'Maharashtra', slug: 'maharashtra' },
  { name: 'Karnataka', slug: 'karnataka' },
  { name: 'Uttar Pradesh', slug: 'uttar-pradesh' },
  { name: 'Rajasthan', slug: 'rajasthan' },
  { name: 'Gujarat', slug: 'gujarat' },
]
