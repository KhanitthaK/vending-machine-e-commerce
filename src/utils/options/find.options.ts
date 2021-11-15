import { OrderItem } from 'sequelize';

class ThrownOption {
  key: string;
  code: string;
  value?: string | string[];
}

export class FindListOption {
  limit: number;
  offset: number;
  isFindAll: boolean;
  order: OrderItem[];
}

export class FindOptions {
  thrownKeys?: ThrownOption[];
  findOptions?: Partial<FindListOption>;
}
