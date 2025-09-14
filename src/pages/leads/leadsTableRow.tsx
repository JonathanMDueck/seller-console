import { useContext } from "react";
import { LeadsContext } from "../../contexts/LeadsContext";
import type { Lead } from "../../types/leadType";

type LeadRowType = {
  lead: Lead;
};

export default function LeadsTableRow({ lead }: LeadRowType) {
  const { setIsOpen, setSelectedLeadDetail, createOpportunity } =
    useContext(LeadsContext);

  function handleRowClick() {
    setSelectedLeadDetail(lead);
    setIsOpen(true);
  }

  function handleConvertLeadButtonClick(e: any, lead: Lead) {
    e.stopPropagation();
    createOpportunity(lead);
  }

  return (
    <tr
      onClick={handleRowClick}
      className="h-15 text-slate-200 transition hover:cursor-pointer hover:bg-slate-800"
    >
      <td className="p-2 text-left">{lead.name}</td>
      <td className="p-2 text-left">{lead.company}</td>
      <td className="p-2 text-left">{lead.email}</td>
      <td className="p-2 text-left">{lead.source}</td>
      <td className="p-2 text-left">{lead.score}</td>
      <td className="p-2 text-left">{lead.status}</td>
      <td>
        <button
          onClick={(e) => handleConvertLeadButtonClick(e, lead)}
          className="z-10 rounded-md border-1 border-slate-500 bg-slate-800 p-2 transition hover:cursor-pointer hover:bg-slate-900"
        >
          Convert
        </button>
      </td>
    </tr>
  );
}
