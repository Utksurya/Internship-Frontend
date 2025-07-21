const UserSelector = ({ users, onSelect }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full">
      <h3 className="text-lg font-semibold mb-3">Select User</h3>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      >
        <option value="">-- Select User --</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
