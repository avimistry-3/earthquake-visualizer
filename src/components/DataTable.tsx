import { useRef, useEffect } from "react";
import type { Earthquake } from "../types/earthquake";
import '../index.css'; 

export default function DataTable({
  data,
  selectedId,
  onSelect,
}: {
  data: Earthquake[],
  selectedId?: string | null,
  onSelect?: (id: string | null) => void
}) {
  // Store references to every table row so we can auto-scroll to a selected one
  const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({});

  // When a row becomes selected, scroll it into view smoothly
  useEffect(() => {
    if (selectedId && rowRefs.current[selectedId]) {
      rowRefs.current[selectedId]!.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedId]);

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Mag</th>
            <th>Depth</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => {
            const isSelected = selectedId === d.id;
            return (
              <tr
                key={d.id}
                ref={(el) => { rowRefs.current[d.id] = el }}
                onMouseEnter={() => onSelect?.(d.id)}
                onClick={() => onSelect?.(d.id)}
                className={isSelected ? "selected-row" : ""}
              >
                <td>{new Date(d.time).toLocaleString()}</td>
                <td>{d.mag ?? "-"}</td>
                <td>{d.depth}</td>
                <td>{d.latitude}</td>
                <td>{d.longitude}</td>
                <td>{d.place}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
