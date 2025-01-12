import React from "react";

const Members = ({ users, handleRemoveMember }) => {
  // Filter users with 'member' role
  const members = users.filter(user => user.role === "member");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-100">Members</h2>
      <div className="space-y-4">
        {members.map(user => (
          <div key={user.id} className="flex justify-between items-center py-2 border-b border-gray-700">
            <div className="flex flex-col">
              <span className="text-gray-200">{user.username}</span>
              <span className="text-gray-400">{user.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Text link for Make User */}
              <button
                onClick={() => handleRemoveMember(user.id)}
                className="text-yellow-400 hover:underline"
              >
                Make User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
