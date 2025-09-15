import { useContext } from "react";
import { LeadsContext } from "../../contexts/LeadsContext";
import LeadsTableFilter from "./leadsTableFilter";
import LeadsTableRow from "./leadsTableRow";

export default function LeadsTable() {
  const { currentLeads } = useContext(LeadsContext);

  return (
    <div className="m-auto mt-6 w-[80%] p-0">
      <h2 className="mb-4 text-3xl font-medium text-slate-100">Leads</h2>
      <LeadsTableFilter />
      <table className="w-full border-separate border-spacing-y-1 rounded-md">
        <thead className="text-1xl w-full text-slate-100">
          <tr className="h-15 rounded-md bg-slate-800">
            <th className="rounded-tl-lg p-2 text-left font-medium">Name</th>
            <th className="p-2 text-left font-medium">Company</th>
            <th className="p-2 text-left font-medium">Email</th>
            <th className="p-2 text-left font-medium">Source</th>
            <th className="p-2 text-left font-medium">Score</th>
            <th className="p-2 text-left font-medium">Status</th>
            <th className="rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody>
          {currentLeads.map((lead) => {
            return <LeadsTableRow key={lead.id} lead={lead} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
