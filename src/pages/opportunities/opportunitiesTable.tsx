import { useContext, useEffect, useState } from "react";
import { LeadsContext } from "../../contexts/LeadsContext";
import type { OpportunityType } from "../../types/opportunityType";
import OpportunitiesTableRow from "./opportunitiesTableRow";

export default function OpportunitiesTable() {
  const { opportunities } = useContext(LeadsContext);

  const [currentOpportunities, setCurrentOpportunities] =
    useState<OpportunityType[]>(opportunities);

  useEffect(() => {
    setCurrentOpportunities(opportunities);
  }, [opportunities]);

  return (
    <div className="m-auto mt-6 w-[80%] p-0">
      <h2 className="mb-4 text-3xl font-medium text-slate-100">
        Opportunities
      </h2>
      <table className="w-full border-separate border-spacing-y-1">
        <thead className="text-1xl w-full text-slate-100">
          <tr className="h-15 rounded-md bg-slate-800">
            <th className="rounded-tl-lg p-2 text-left font-medium">Name</th>
            <th className="p-2 text-left font-medium">Stage</th>
            <th className="p-2 text-left font-medium">Amount</th>
            <th className="rounded-tr-lg p-2 text-left font-medium">
              Account Name
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentOpportunities &&
            currentOpportunities.map((opportunity) => {
              return (
                <OpportunitiesTableRow
                  key={opportunity.id}
                  opportunity={opportunity}
                />
              );
            })}
        </tbody>
      </table>
      {opportunities.length === 0 && (
        <div className="mt-20 flex w-full justify-center">
          <p className="text-xl">
            No leads were converted to opportunities yet.
          </p>
        </div>
      )}
    </div>
  );
}
