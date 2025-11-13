import Papa from "papaparse";
import type { RawEarthquakeRow, Earthquake } from "../types/earthquake";

export function parseCsvToEarthquakes(csvText: string): Earthquake[] {
  const parsed = Papa.parse<RawEarthquakeRow>(csvText, { header: true, skipEmptyLines: true });
  return (parsed.data || []).map((r, i) => {
    const mag = r.mag ? Number(r.mag) : null;
    return {
      id: String(i) + "_" + (r.time || ""),
      time: r.time ? Date.parse(r.time) : Date.now(),
      latitude: Number(r.latitude || 0),
      longitude: Number(r.longitude || 0),
      depth: Number(r.depth || 0),
      mag,
      magType: r.magType,
      place: r.place || "",
      raw: r
    };
  });
}
