import { createContext, useState, type ReactNode } from "react";
import rawData from "../leads.json";
import type { FilterType } from "../types/filterType";
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
  currentLeads: Lead[];
  updateLead: (id: number, email: string, status: string) => void;
  createOpportunity: (lead: Lead) => void;
  opportunities: OpportunityType[];
  applyFilters: (filters: FilterType) => void;
  clearFilters: () => void;
};

export const LeadsContext = createContext({} as LeadsContextType);

export function LeadsContextProvider({ children }: LeadsContextProviderProps) {
  const [rawLeads] = useState<Lead[]>(rawData);
  const [currentLeads, setCurrentLeads] = useState<Lead[]>(rawLeads);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLeadDetail, setSelectedLeadDetail] = useState<Lead>();
  const [opportunities, setOpportunities] = useState<OpportunityType[]>([]);

  function updateLead(id: number, email: string, status: string) {
    setCurrentLeads(
      currentLeads.map((lead) =>
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
    setCurrentLeads(currentLeads.filter((lead) => lead.id !== id));
  }

  function applyFilters(filters: FilterType) {
    let filteredLeads: Lead[] = [];
    localStorage.setItem("seller-console-filters", JSON.stringify(filters));

    if (filters.nameOrCompany !== "") {
      filteredLeads = currentLeads.filter((lead) => {
        return (
          lead.name
            .toLocaleLowerCase()
            .includes(filters.nameOrCompany.toLocaleLowerCase()) ||
          lead.company
            .toLocaleLowerCase()
            .includes(filters.nameOrCompany.toLocaleLowerCase())
        );
      });
    }

    if (filters.status !== "") {
      filteredLeads = filteredLeads.filter((lead) => {
        return lead.status === filters.status;
      });
    }

    if (filters.orderBy !== "") {
      if (filters.orderBy === "ascending") {
        filteredLeads = [...filteredLeads].sort((a, b) => a.score - b.score);
      } else if (filters.orderBy === "descending") {
        filteredLeads = [...filteredLeads].sort((a, b) => b.score - a.score);
      }
    }
    console.log("setting current leads " + filteredLeads.length);
    setCurrentLeads(filteredLeads);
  }

  function clearFilters() {
    setCurrentLeads(rawLeads);
    localStorage.removeItem("seller-console-filters");
  }

  return (
    <LeadsContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedLeadDetail,
        setSelectedLeadDetail,
        currentLeads,
        updateLead,
        createOpportunity,
        opportunities,
        applyFilters,
        clearFilters,
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
}
