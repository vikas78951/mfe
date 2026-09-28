import { lazy, Suspense } from "react";

import "./App.css";
import { RemoteErrorBoundary } from "./components/RemoteErrorBoundary";
const Accounts = lazy(() => import("accounts/App"));

function App() {
  return (
    <RemoteErrorBoundary>
      <Suspense fallback={<div>Loading Accounts...</div>}>
        <Accounts />
      </Suspense>
    </RemoteErrorBoundary>
  );
}

export default App;
