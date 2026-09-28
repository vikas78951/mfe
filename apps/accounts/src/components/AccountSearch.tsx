type AccountSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function AccountSearch({ value, onChange }: AccountSearchProps) {
  return (
    <label>
      Search accounts
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
