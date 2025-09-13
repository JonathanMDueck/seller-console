import { useContext } from "react";
import { DetailPanelContext } from "../contexts/detailPanelContext";
import type { Lead } from "../types/leadType";

type LeadRowType = {
  lead: Lead;
};

export default function LeadsTableRow({ lead }: LeadRowType) {
  const { setIsOpen, setLead } = useContext(DetailPanelContext);

  function handleRowClick() {
    setLead(lead);
    setIsOpen(true);
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
        <button className="rounded-md bg-slate-700 p-2 transition hover:cursor-pointer">
          Convert
        </button>
      </td>
    </tr>
  );
}
