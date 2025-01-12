const Users = ({ users, handleMakeMember }) => {
    // Filter users who are not members
    const nonMembers = users.filter(user => user.role !== "member");
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-100">Users</h2>
        <div className="space-y-4">
          {nonMembers.map((user) => (
            <div key={user.id} className="flex justify-between items-center py-2 border-b border-gray-700">
              <div className="flex flex-col">
                <span className="text-gray-200">{user.username}</span>
                <span className="text-gray-400">{user.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                {/* Text link for Make Member */}
                <button
                  onClick={() => handleMakeMember(user.id)}
                  className="text-blue-400 hover:underline"
                >
                  Make Member
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Users;
  