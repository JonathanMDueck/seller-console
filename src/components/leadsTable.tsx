import rawData from "../leads.json";
import type { Lead } from "../types/leadType";
import LeadsTableFilter from "./leadsTableFilter";
import LeadsTableRow from "./leadsTableRow";

export default function LeadsTable() {
  const leads: Lead[] = rawData;

  function applyFilters(
    nameOrCompany: string,
    status: string,
    orderBy: string,
  ) {
    console.log(nameOrCompany);
    console.log(status);
    console.log(orderBy);
  }

  return (
    <div className="m-auto mt-6 w-6xl">
      <h2 className="mb-4 text-3xl font-medium text-slate-100">Leads</h2>
      <LeadsTableFilter applyFilters={applyFilters} />
      <table className="w-full border-separate border-spacing-y-1">
        <thead className="text-1xl w-full text-slate-100">
          <tr className="h-15 rounded-md bg-slate-800">
            <th className="p-2 text-left font-medium">Name</th>
            <th className="p-2 text-left font-medium">Company</th>
            <th className="p-2 text-left font-medium">Email</th>
            <th className="p-2 text-left font-medium">Source</th>
            <th className="p-2 text-left font-medium">Score</th>
            <th className="p-2 text-left font-medium">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => {
            return <LeadsTableRow key={lead.id} lead={lead} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
