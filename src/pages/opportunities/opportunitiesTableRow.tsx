import type { OpportunityType } from "../../types/opportunityType";

type OpportunitiesTableRowProps = {
  opportunity: OpportunityType;
};

export default function OpportunitiesTableRow({
  opportunity,
}: OpportunitiesTableRowProps) {
  return (
    <tr>
      <td className="p-2 text-left">{opportunity.name}</td>
      <td className="p-2 text-left">{opportunity.stage}</td>
      <td className="p-2 text-left">{opportunity.amount}</td>
      <td className="p-2 text-left">{opportunity.accountName}</td>
    </tr>
  );
}
