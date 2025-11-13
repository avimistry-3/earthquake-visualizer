import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelection } from '../context/SelectionContext';
import type { Earthquake } from '../types/earthquake';
import '../index.css'; 

interface ChartPanelProps {
  data: Earthquake[];
}

export default function ChartPanel({ data }: ChartPanelProps) {
  const { setSelectedId } = useSelection();

  return (
    <div className="chart-panel">
      <h2 className="chart-panel-title">Earthquake Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <XAxis dataKey="longitude" name="Longitude" />
          <YAxis dataKey="latitude" name="Latitude" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            data={data}
            fill="#3b82f6"
            onClick={(e: any) => setSelectedId(e.id)}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
