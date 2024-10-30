import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const location = useLocation();
    const { name, email, phone } = location.state || {}; // Destructure the data from state
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/signup'); // Navigate to the signup page for editing
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: 'url(https://i.imghippo.com/files/MlTij1728811979.png)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backgroundBlendMode: 'overlay',
            }}>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
                <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <p className="w-full px-3 py-2 border rounded-lg bg-gray-100">{name || 'N/A'}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <p className="w-full px-3 py-2 border rounded-lg bg-gray-100">{email || 'N/A'}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone No:</label>
                    <p className="w-full px-3 py-2 border rounded-lg bg-gray-100">{phone || 'N/A'}</p>
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={handleEdit}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:translate-x-1"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;