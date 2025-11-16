import { useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { Earthquake } from "../types/earthquake";
import { useSelection } from "../context/SelectionContext";
import '../index.css';

interface ChartPanelProps {
  data: Earthquake[];
}

// Fields the user can choose for the chart axes
const numericFields = ["mag", "depth", "latitude", "longitude"];

export default function ChartPanel({ data }: ChartPanelProps) {
  const { setSelectedId } = useSelection();
  const [xField, setXField] = useState<string>("longitude");
  const [yField, setYField] = useState<string>("latitude");

  return (
    <div className="chart-panel">
      <h2 className="chart-panel-title">Earthquake Chart</h2>

      {/* Axis selection controls */}
      <div className="controls">
        <label>
          X-axis: 
          <select value={xField} onChange={(e) => setXField(e.target.value)}>
            {numericFields.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </label>
        <label>
          Y-axis: 
          <select value={yField} onChange={(e) => setYField(e.target.value)}>
            {numericFields.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </label>
      </div>

      {/* Scatter chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <XAxis dataKey={xField} name={xField} />
          <YAxis dataKey={yField} name={yField} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            data={data}
            fill="#3b82f6"
            onClick={(point: any) => setSelectedId(point.id)}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
