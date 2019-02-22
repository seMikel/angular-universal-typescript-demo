import { Purchase } from './purchase.interface';

export interface User {
    name: string;
    email: string;
    purchases: Purchase[];
}
