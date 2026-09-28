export type AccountStatus = "active" | "inactive";

export type Account = {
  id: number;
  name: string;
  email: string;
  status: AccountStatus;
};

export const accounts: Account[] = [
  {
    id: 1,
    name: "Vikas Singh",
    email: "vikas@example.com",
    status: "active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
  },
];
