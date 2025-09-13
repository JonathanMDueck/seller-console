import { createContext, useState, type ReactNode } from "react";
import type { Lead } from "../types/leadType";

type DetailPanelContextProviderProps = {
  children: ReactNode;
};

type DetailPanelContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  lead: Lead | undefined;
  setLead: (lead: Lead) => void;
};

export const DetailPanelContext = createContext({} as DetailPanelContextType);

export function DetailPanelContextProvider({
  children,
}: DetailPanelContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lead, setLead] = useState<Lead>();

  return (
    <DetailPanelContext.Provider value={{ isOpen, setIsOpen, lead, setLead }}>
      {children}
    </DetailPanelContext.Provider>
  );
}
