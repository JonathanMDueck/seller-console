import { useContext, useEffect, useState } from "react";
import { LeadsContext } from "../../contexts/LeadsContext";
import type { FilterType } from "../../types/filterType";

export default function LeadsTableFilter() {
  const [nameOrCompanyFilter, setNameOrCompanyFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [orderByFilter, setOrderByFilter] = useState("");

  const { applyFilters, clearFilters } = useContext(LeadsContext);

  function handleApplyFilters() {
    applyFilters({
      nameOrCompany: nameOrCompanyFilter,
      status: statusFilter,
      orderBy: orderByFilter,
    });
  }

  function handleStoredFilters() {
    const storedFilter: string | null = localStorage.getItem(
      "seller-console-filters",
    );

    if (storedFilter) {
      const filter: FilterType = JSON.parse(storedFilter);
      setNameOrCompanyFilter(filter.nameOrCompany);
      setStatusFilter(filter.status);
      setOrderByFilter(filter.orderBy);
    }
  }

  function handleClearFilters() {
    setNameOrCompanyFilter("");
    setStatusFilter("");
    setOrderByFilter("");
    clearFilters();
  }

  useEffect(() => {
    handleStoredFilters();
  }, []);

  return (
    <div className="flex gap-2">
      <span className="p-2 text-xl">Filters: </span>
      <input
        type="text"
        value={nameOrCompanyFilter}
        placeholder="name / company"
        className="rounded-md border-1 border-slate-500 p-2"
        onChange={(e) => setNameOrCompanyFilter(e.target.value)}
      />
      <select
        name="status"
        value={statusFilter}
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
        value={orderByFilter}
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
      <button
        onClick={handleClearFilters}
        className="hover: cursor-pointer rounded-md border-1 border-slate-500 bg-slate-800 p-2 transition hover:bg-slate-900"
      >
        Clear filters
      </button>
    </div>
  );
}
