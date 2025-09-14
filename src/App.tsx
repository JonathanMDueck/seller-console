import { RouterProvider } from "react-router-dom";
import { LeadsContextProvider } from "./contexts/LeadsContext";
import { router } from "./routes";

function App() {
  return (
    <LeadsContextProvider>
      <RouterProvider router={router} />
    </LeadsContextProvider>
  );
}

export default App;
