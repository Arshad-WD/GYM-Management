import React, { useState, useEffect } from 'react';
import { db } from '../../../services/firebase.js';  // Import Firestore instance
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: "", email: "", phone: "", membershipStatus: "Active" });
  const navigate = useNavigate();

  // Fetch members from Firestore
  useEffect(() => {
    const fetchMembers = async () => {
      const membersCollection = collection(db, "members");
      const membersSnapshot = await getDocs(membersCollection);
      const membersList = membersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(membersList);
    };
    fetchMembers();
  }, []);

  // Add new member to Firestore
  const handleAddMember = async () => {
    if (newMember.name && newMember.email && newMember.phone) {
      try {
        const docRef = await addDoc(collection(db, "members"), {
          ...newMember,
          createdAt: new Date(),
        });
        console.log("New member added with ID: ", docRef.id);
        setNewMember({ name: "", email: "", phone: "", membershipStatus: "Active" });
        fetchMembers();  // Refresh member list
      } catch (error) {
        console.error("Error adding member: ", error);
      }
    }
  };

  // Delete a member
  const handleDeleteMember = async (id) => {
    try {
      await deleteDoc(doc(db, "members", id));
      console.log("Member deleted: ", id);
      fetchMembers();  // Refresh member list
    } catch (error) {
      console.error("Error deleting member: ", error);
    }
  };

  // Update a member's details
  const handleUpdateMember = async (id, updatedMember) => {
    try {
      const memberRef = doc(db, "members", id);
      await updateDoc(memberRef, updatedMember);
      console.log("Member updated: ", id);
      fetchMembers();  // Refresh member list
    } catch (error) {
      console.error("Error updating member: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-semibold">Member Management</h1>
        <button className="bg-pink-600 px-4 py-2 rounded-lg" onClick={() => navigate('/admin/dashboard')}>Back to Dashboard</button>
      </header>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
        <input
          type="text"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          placeholder="Name"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded-lg"
        />
        <input
          type="email"
          value={newMember.email}
          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
          placeholder="Email"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded-lg"
        />
        <input
          type="text"
          value={newMember.phone}
          onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
          placeholder="Phone"
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded-lg"
        />
        <select
          value={newMember.membershipStatus}
          onChange={(e) => setNewMember({ ...newMember, membershipStatus: e.target.value })}
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleAddMember}
          className="w-full py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
        >
          Add Member
        </button>
      </div>

      <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Existing Members</h2>
        {members.length === 0 ? (
          <p className="text-gray-400">No members found</p>
        ) : (
          <div>
            {members.map((member) => (
              <div key={member.id} className="flex justify-between items-center bg-gray-700 p-4 mb-4 rounded-lg">
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.email}</p>
                  <p className="text-gray-400">{member.phone}</p>
                  <p className="text-gray-400">Status: {member.membershipStatus}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="bg-red-600 px-4 py-2 rounded-lg mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdateMember(member.id, { membershipStatus: "Inactive" })}
                    className="bg-yellow-600 px-4 py-2 rounded-lg"
                  >
                    Deactivate
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberManagement;
