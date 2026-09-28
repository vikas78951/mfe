import type { Account } from "./account";

export function filterAccounts(
  accounts: Account[],
  search: string,
): Account[] {
  const query = search.trim().toLowerCase();

  if (!query) {
    return accounts;
  }

  return accounts.filter(
    (account) =>
      account.name.toLowerCase().includes(query) ||
      account.email.toLowerCase().includes(query),
  );
}