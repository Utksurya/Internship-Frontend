import { useState } from 'react';
import API from '../api';

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name.trim()) return;
    await API.post('/users', { name });
    setName('');
    onUserAdded();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full">
      <h3 className="text-lg font-semibold mb-3">Add User</h3>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddUser;
