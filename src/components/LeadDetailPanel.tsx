import { useContext } from "react";
import { DetailPanelContext } from "../contexts/detailPanelContext";

export default function LeadDetailPanel() {
  const { isOpen, setIsOpen, lead } = useContext(DetailPanelContext);
  return (
    <div
      className={`fixed top-0 right-0 h-full w-128 transform bg-slate-700 shadow-lg transition-transform duration-300 ${isOpen ? "transalte-x-0" : "translate-x-full"}`}
    >
      <div className="relative flex flex-col">
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-2 right-112 rounded-md border-1 border-slate-700 bg-slate-800 p-2 transition hover:cursor-pointer hover:bg-slate-600"
        >
          close
        </button>
        <div className="mt-10 flex flex-col gap-4 p-10">
          <div className="flex gap-4 text-xl">
            <p>Name:</p>
            <p>{lead ? lead.name : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Company:</p>
            <p>{lead ? lead.company : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Email:</p>
            <p>{lead ? lead.email : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Score:</p>
            <p>{lead ? lead.score : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Source:</p>
            <p>{lead ? lead.source : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Status:</p>
            <p>{lead ? lead.status : ""}</p>
          </div>
        </div>
        <div className="flex justify-between gap-2 p-10">
          <button className="h-10 w-full rounded-md bg-green-700">Save</button>
          <button className="w-full rounded-md bg-red-700">Cancel</button>
        </div>
      </div>
    </div>
  );
}
