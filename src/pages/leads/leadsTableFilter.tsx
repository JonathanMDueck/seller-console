import { useState } from "react";

type LeadsTableFilterProps = {
  applyFilters: (
    nameOrCompany: string,
    status: string,
    orderBy: string,
  ) => void;
};

export default function LeadsTableFilter({
  applyFilters,
}: LeadsTableFilterProps) {
  const [nameOrCompanyFilter, setNameOrCompanyFilter] = useState("");
  const [statusFitler, setStatusFilter] = useState("");
  const [orderByFilter, setOrderByFilter] = useState("");

  function handleApplyFilters() {
    applyFilters(nameOrCompanyFilter, statusFitler, orderByFilter);
  }

  return (
    <div className="flex gap-2">
      <span className="p-2 text-xl">Filters: </span>
      <input
        type="text"
        placeholder="name / company"
        className="rounded-md border-1 border-slate-500 p-2"
        onChange={(e) => setNameOrCompanyFilter(e.target.value)}
      />
      <select
        name="status"
        id="status"
        className="rounded-md border-1 border-slate-500 bg-slate-900 p-2"
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="" className="text-slate-600">
          Status
        </option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
      </select>
      <select
        name="status"
        id="status"
        className="rounded-md border-1 border-slate-500 bg-slate-900 p-2"
        onChange={(e) => setOrderByFilter(e.target.value)}
      >
        <option value="" className="text-slate-600">
          Order by
        </option>
        <option value="ascending">Score: low to high</option>
        <option value="descending">Score: high to low</option>
      </select>
      <button
        onClick={handleApplyFilters}
        className="hover: cursor-pointer rounded-md border-1 border-slate-500 bg-slate-800 p-2 transition hover:bg-slate-900"
      >
        Apply filters
      </button>
    </div>
  );
}
