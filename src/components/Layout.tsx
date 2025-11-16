import type { Earthquake } from "../types/earthquake";
import ChartPanel from "./ChartPanel";
import DataTable from "./DataTable";
import '../index.css';

// Main layout wrapper controlling the chart and table 
export default function Layout({ data }: { data: Earthquake[] }) {
  return (
    <div className="layout-container">
      <div className="chart-wrapper">
        <ChartPanel data={data} />
      </div>
      <div className="table-wrapper">
        <DataTable data={data} />
      </div>
    </div>
  );
}
