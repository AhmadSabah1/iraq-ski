'use client'
import { useState } from 'react';
import { profile as initialProfile } from '@/data/profile'; // Import the dummy profile data

export default function ProfileCard() {
    // Local state for the profile fields
    const [profile, setProfile] = useState(initialProfile);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated profile:', profile);
        // Simulate profile update here (could be an API call)
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>

            {/* Profile form card */}
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>

                {/* Role */}
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Role
                    </label>
                    <input
                        type="text"
                        name="role"
                        id="role"
                        value={profile.role}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={profile.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>

                {/* Bio */}
                <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                    </label>
                    <textarea
                        name="bio"
                        id="bio"
                        rows={4}
                        value={profile.bio}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                    >
                        Save Profile
                    </button>
                </div>
            </form>
        </div>
    );
}
