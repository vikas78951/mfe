import { lazy, Suspense } from "react";

import "./App.css";
const Accounts = lazy(() => import("accounts/App"));

function App() {
  return (
    <Suspense fallback={<div>Loading Accounts...</div>}>
      <Accounts />
    </Suspense>
  );
}

export default App;
