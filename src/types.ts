export interface IProduct {
    availabilityStatus: string;
    title: string
    brand?: string;
    description: string;
    price: number;
}

export interface IProductCardProps {
    productsInfo: IProduct[];
}