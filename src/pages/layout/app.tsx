import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export default function AppLayout() {
  return (
    <div className="flex flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
