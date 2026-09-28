import type { Account } from "../domain/account";

type AccountListProps = {
  accounts: Account[];
};

export function AccountList({ accounts }: AccountListProps) {
  if (accounts.length === 0) {
    return <p>No accounts found.</p>;
  }

  return (
    <ul>
      {accounts.map((account) => (
        <li key={account.id}>
          <strong>{account.name}</strong>
          <span>{account.email}</span>
          <span>{account.status}</span>
        </li>
      ))}
    </ul>
  );
}
