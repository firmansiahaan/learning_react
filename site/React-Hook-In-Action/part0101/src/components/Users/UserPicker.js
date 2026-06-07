import data from "../../static.json";

const usersData = data.users;

export default function UserPicker () {
  return (
    <select className="user-picker">
      <option>Users</option>
      {usersData.map((user, i) => (
        <option
          key={user.id}
        >
          {user.name}
        </option>
      ))}
    </select>
  );
}