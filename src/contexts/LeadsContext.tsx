import { createContext, useState, type ReactNode } from "react";
import rawData from "../leads.json";
import type { Lead } from "../types/leadType";
import type { OpportunityType } from "../types/opportunityType";

type LeadsContextProviderProps = {
  children: ReactNode;
};

type LeadsContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedLeadDetail: Lead | undefined;
  setSelectedLeadDetail: (lead: Lead) => void;
  leads: Lead[];
  updateLead: (id: number, email: string, status: string) => void;
  createOpportunity: (lead: Lead) => void;
  opportunities: OpportunityType[];
};

export const LeadsContext = createContext({} as LeadsContextType);

export function LeadsContextProvider({ children }: LeadsContextProviderProps) {
  const [leads, setLeads] = useState<Lead[]>(rawData);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLeadDetail, setSelectedLeadDetail] = useState<Lead>();
  const [opportunities, setOpportunities] = useState<OpportunityType[]>([]);

  function updateLead(id: number, email: string, status: string) {
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, email: email, status: status } : lead,
      ),
    );
  }

  function createOpportunity(lead: Lead) {
    const opportunity: OpportunityType = {
      name: lead.name + " / " + lead.company,
      accountName: "Test Account",
      amount: Math.floor(Math.random() * (12000 - 200 + 1)) + 200,
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      stage: "Test stage",
    };

    setOpportunities([...opportunities, opportunity]);
    filterLeads(lead);
  }

  function filterLeads({ id }: Lead) {
    setLeads(leads.filter((lead) => lead.id !== id));
  }

  return (
    <LeadsContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedLeadDetail,
        setSelectedLeadDetail,
        leads,
        updateLead,
        createOpportunity,
        opportunities,
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
}
