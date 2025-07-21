import API from '../api';

const ClaimButton = ({ userId, onClaim }) => {
  const handleClaim = async () => {
    if (!userId) return alert("Please select a user.");
    const res = await API.post(`/claim/${userId}`);
    const { user, randomPoints } = res.data;
    alert(`${user.name} earned ${randomPoints} points!`);
    onClaim();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full">
      <button
        onClick={handleClaim}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full"
      >
        Claim Points
      </button>
    </div>
  );
};

export default ClaimButton;
