import { useQuery } from '@tanstack/react-query'
import Papa from 'papaparse'
import type { Earthquake } from '../types/earthquake'

const DATA_URL =
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'

export const useEarthquakeData = () => {
  return useQuery<Earthquake[]>({
    queryKey: ['earthquakes'],
    queryFn: async () => {
      const res = await fetch(DATA_URL)
      const text = await res.text()
      const parsed = Papa.parse(text, { header: true })
      return parsed.data as Earthquake[]
    },
  })
}
