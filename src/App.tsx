import { useEarthquakeData } from './hooks/useEarthquakeData';
import ChartPanel from './components/ChartPanel';
import DataPanel from './components/DataPanel';
import './index.css';

export default function App() {
  const { data, isLoading, error } = useEarthquakeData();

  if (isLoading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">Error loading data</div>;
  if (!data) return null;

  return (
    <div className="app-container">
      <div className="chart-panel">
        <ChartPanel data={data} />
      </div>
      <div className="data-panel">
        <DataPanel data={data} />
      </div>
    </div>
  );
}