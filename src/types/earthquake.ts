export interface Earthquake {
  id: string
  time: number
  latitude: number
  longitude: number
  depth: number
  mag: number | null      
  magType?: string
  place: string
  raw?: any               
}

export interface RawEarthquakeRow {
  time: string;       
  latitude: string;
  longitude: string;
  depth: string;
  mag: string;
  magType: string;
  place: string;
  [key: string]: string;
}