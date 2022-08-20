import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@components/Layout/Layout";
import Activity from "@pages/activity/components/Activity";
import ActivityTable from "@pages/activity/components/ActivityTable";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActivityTable />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
