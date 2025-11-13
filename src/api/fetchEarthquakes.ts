import axios from "axios";
import { parseCsvToEarthquakes } from "../utils/parseCsv";

const CSV_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv";

export async function fetchEarthquakesCsv() {
  const res = await axios.get(CSV_URL);
  const csvText = res.data;
  const data = parseCsvToEarthquakes(csvText);
  return data;
}
