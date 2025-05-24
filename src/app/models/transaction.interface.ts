export interface Transaction {
    id: string;
    productId: string;
    buyerId: string;
    sellerId: string;
    amount: number;
    status: 'pending' | 'completed' | 'cancelled' | 'refunded' | 'rejected';
    paymentMethod: string;
    createdAt: Date;
    updatedAt: Date;
    type: 'purchase' | 'refund';
    currency: string;
    timestamp: Date;
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    trackingNumber?: string;
    notes?: string;
} 