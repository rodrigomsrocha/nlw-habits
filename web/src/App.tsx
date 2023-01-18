import { Header } from "./components/Header";
import { SumaryTable } from "./components/SummaryTable";

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SumaryTable />
      </div>
    </div>
  );
}
