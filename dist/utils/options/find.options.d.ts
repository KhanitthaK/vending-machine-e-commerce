import { OrderItem } from 'sequelize';
declare class ThrownOption {
    key: string;
    code: string;
    value?: string | string[];
}
export declare class FindListOption {
    limit: number;
    offset: number;
    isFindAll: boolean;
    order: OrderItem[];
}
export declare class FindOptions {
    thrownKeys?: ThrownOption[];
    findOptions?: Partial<FindListOption>;
}
export {};
