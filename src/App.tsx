import Header from "./components/header";
import LeadDetailPanel from "./components/LeadDetailPanel";
import LeadsTable from "./components/leadsTable";

function App() {
  return (
    <>
      <div className="relative h-screen bg-slate-900">
        <LeadDetailPanel />
        <Header />
        <LeadsTable />
      </div>
    </>
  );
}

export default App;
