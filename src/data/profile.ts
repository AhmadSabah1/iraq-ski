// data/profile.ts

export interface Profile {
    name: string;
    email: string;
    role: string;
    phone: string;
    bio: string;
}

export const profile: Profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    phone: '+1234567890',
    bio: 'A passionate developer with experience in building web applications using modern JavaScript frameworks and technologies.',
};
