import { useSelection } from '../context/SelectionContext';
import type { Earthquake } from '../types/earthquake';
import '../index.css'; 

interface DataPanelProps {
  data: Earthquake[];
}

export default function DataPanel({ data }: DataPanelProps) {
  const { selectedId, setSelectedId } = useSelection();

  if (!data || data.length === 0) return null;

  return (
    <div className="data-panel">
      <h2 className="data-panel-title">Data Table</h2>
      <table className="data-panel-table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={selectedId === row.id ? 'selected-row' : ''}
              onClick={() => setSelectedId(row.id)}
            >
              {Object.values(row).map((value, i) => (
                <td key={i}>{value as string}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
