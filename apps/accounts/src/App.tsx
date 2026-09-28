import { useMemo, useState } from "react";
import { AccountList } from "./components/AccountList";
import { AccountSearch } from "./components/AccountSearch";
import { accounts } from "./domain/account";
import { filterAccounts } from "./domain/account-utils";

function App() {
  const [search, setSearch] = useState("");

  const filteredAccounts = useMemo(
    () => filterAccounts(accounts, search),
    [search],
  );

  return (
    <main>
      <h1>Accounts</h1>

      <AccountSearch value={search} onChange={setSearch} />
      <AccountList accounts={filteredAccounts} />
    </main>
  );
}

export default App;
