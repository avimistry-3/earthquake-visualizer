import type { Earthquake } from "../types/earthquake";
import ChartPanel from "./ChartPanel";
import DataTable from "./DataTable";
import '../index.css'; 

export default function Layout({ data }: { data: Earthquake[] }) {
  return (
    <div className="layout-container">
      <ChartPanel data={data} />
      <div className="data-table-wrapper">
        <DataTable data={data} />
      </div>
    </div>
  );
}
