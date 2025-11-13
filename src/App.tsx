import { useEarthquakeData } from './hooks/useEarthquakeData'
import ChartPanel from './components/ChartPanel'
import DataPanel from './components/DataPanel'

export default function App() {
  const { data, isLoading, error } = useEarthquakeData()

  if (isLoading) return <div className="p-4">Loading data...</div>
  if (error) return <div className="p-4 text-red-500">Error loading data</div>
  if (!data) return null

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
