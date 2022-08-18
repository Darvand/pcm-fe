import { BrowserRouter, Route, Routes } from "react-router-dom";

import ActivityTable from "@pages/activity/components/ActivityTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ActivityTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
