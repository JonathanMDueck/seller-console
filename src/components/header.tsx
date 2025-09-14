import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="h-20 w-screen bg-slate-800">
      <div className="m-auto flex h-full w-[80%] items-center justify-between">
        <h3 className="text-3xl font-medium text-slate-100">Seller Console</h3>
        <div className="flex w-45 gap-4">
          <span
            onClick={() => navigate("/")}
            className={`${pathname === "/" ? "font-medium" : "font-light"} w-15 hover:cursor-pointer`}
          >
            Leads
          </span>
          <span
            onClick={() => navigate("/opportunities")}
            className={`${pathname === "/opportunities" ? "font-medium" : "font-light"} w-15 hover:cursor-pointer`}
          >
            Opportunities
          </span>
        </div>
      </div>
    </header>
  );
}
