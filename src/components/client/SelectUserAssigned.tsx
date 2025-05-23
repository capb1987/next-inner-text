type SelectUserAssignedProps = {
  user: {
    key: string;
    name: string;
  };
};

export default function SelectUserAssigned({ user }: SelectUserAssignedProps) {
  return <option value={user.key}>{user.name}</option>;
}
