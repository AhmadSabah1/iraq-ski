// app/profile/page.tsx

import ProfileCard from '../../components/ProfileCard';

export default function ProfilePage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">User Profile</h1>
            <ProfileCard />
        </div>
    );
}
