export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'seller' | 'buyer';
    status: 'active' | 'inactive' | 'suspended';
    createdAt: Date;
    lastLogin: Date;
    profile: {
        firstName: string;
        lastName: string;
        phone?: string;
        address?: string;
    };
} 