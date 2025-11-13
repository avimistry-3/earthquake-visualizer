export interface Earthquake {
  id: string
  time: number
  latitude: number
  longitude: number
  depth: number
  mag: number | null      // allow null
  magType?: string
  place: string
  raw?: any               // keep raw for reference
}

export interface RawEarthquakeRow {
  time: string;       // ISO timestamp
  latitude: string;
  longitude: string;
  depth: string;
  mag: string;
  magType: string;
  place: string;
  [key: string]: string;
}