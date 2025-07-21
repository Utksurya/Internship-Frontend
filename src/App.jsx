import { useEffect, useState } from 'react';
import UserSelector from './components/UserSelector';
import AddUser from './components/AddUser';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import API from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [refresh, setRefresh] = useState(false);

  const fetchUsers = async () => {
    const res = await API.get('/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">Point Claim System</h1>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Add User Section */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Add User</h2>
          <AddUser onUserAdded={() => setRefresh(!refresh)} />
        </section>

        {/* Select User Section */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Select User</h2>
          <UserSelector users={users} onSelect={setSelectedUserId} />
          <ClaimButton userId={selectedUserId} onClaim={() => setRefresh(!refresh)} />
        </section>

        {/* Leaderboard */}
        <section>
          <Leaderboard users={users} />
        </section>
      </main>
    </div>
  );
}

export default App;
