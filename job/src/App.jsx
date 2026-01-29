import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Jobs />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;