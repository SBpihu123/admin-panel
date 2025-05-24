export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    sellerId: string;
    status: 'pending' | 'approved' | 'rejected';
    images: string[];
    createdAt: Date;
    updatedAt: Date;
    specifications: {
        [key: string]: string;
    };
    stock: number;
    rating?: number;
    reviews?: number;
} 