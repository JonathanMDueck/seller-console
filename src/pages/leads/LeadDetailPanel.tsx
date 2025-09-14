import { useContext, useEffect, useState } from "react";
import { LeadsContext } from "../../contexts/LeadsContext";

export default function LeadDetailPanel() {
  const { isOpen, setIsOpen, selectedLeadDetail, updateLead } =
    useContext(LeadsContext);

  const [email, setEmail] = useState(selectedLeadDetail?.email);
  const [status, setStatus] = useState(selectedLeadDetail?.status);

  function handleSaveOnClick() {
    const updatedEmail =
      email !== selectedLeadDetail!.email ? email : selectedLeadDetail!.email;
    const updatedStatus =
      status !== selectedLeadDetail!.status
        ? status
        : selectedLeadDetail!.status;

    if (isValidEmail(updatedEmail!)) {
      updateLead(selectedLeadDetail!.id, updatedEmail!, updatedStatus!);
      setIsOpen(false);
    }
  }

  function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  useEffect(() => {
    setEmail(selectedLeadDetail?.email);
    setStatus(selectedLeadDetail?.status);
  }, [selectedLeadDetail]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-128 transform bg-slate-800 shadow-lg transition-transform duration-300 ${isOpen ? "transalte-x-0" : "translate-x-full"}`}
    >
      <div className="relative flex flex-col">
        <div className="mt-10 flex flex-col gap-4 p-10">
          <h3 className="text-2xl font-bold">Lead Detail Panel</h3>
          <div className="flex gap-4 text-xl">
            <p>Name:</p>
            <p>{selectedLeadDetail ? selectedLeadDetail.name : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Company:</p>
            <p>{selectedLeadDetail ? selectedLeadDetail.company : ""}</p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <p>Email:</p>
            <input
              className="w-full border-0 border-b-1 p-1 font-light focus:outline-none"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-4 text-xl">
            <p>Score:</p>
            <p>{selectedLeadDetail ? selectedLeadDetail.score : ""}</p>
          </div>
          <div className="flex gap-4 text-xl">
            <p>Source:</p>
            <p>{selectedLeadDetail ? selectedLeadDetail.source : ""}</p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <p>Status:</p>
            <select
              className="rounded-md bg-slate-700 p-1 font-light focus:outline-none"
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              id="status"
              value={status}
            >
              <option className="font-light" value="Active">
                Active
              </option>
              <option className="font-light" value="Inactive">
                Inactive
              </option>
              <option className="font-light" value="Pending">
                Pending
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-2 p-10">
          <button
            onClick={handleSaveOnClick}
            className="h-10 w-full rounded-md bg-green-700 transition hover:cursor-pointer hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-md bg-red-700 hover:cursor-pointer hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
