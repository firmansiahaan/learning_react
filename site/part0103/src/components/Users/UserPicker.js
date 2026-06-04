import users from "../../static.json";

const data = users.users;

export default function UserPicker () {
  return (
    <select>
      {data.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}