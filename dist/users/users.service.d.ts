import { User } from './users.model';
export declare class UsersService {
    private users;
    addUser(name: string, rank: number): string;
    getUsers(): User[];
    getUser(userId: string): {
        id: string;
        name: string;
        rank: number;
    };
    updateUser(userId: string, name: string, rank: number): void;
    deleteProduct(userId: string): void;
    private findProduct;
}
