import ExampleDataTable, { Inventory } from "./components/Inventory";

export default function App() {
  return (
    <div className="flex">
      <Inventory />
      <ExampleDataTable />
    </div>
  );
}
