const Leaderboard = ({ users }) => {
  const sorted = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full">
      <h3 className="text-lg font-semibold mb-3">Leaderboard</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Rank</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user, idx) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">{idx + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
