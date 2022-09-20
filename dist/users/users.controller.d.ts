import { UsersService } from "./users.service";
import { User } from "./users.model";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userName: string, rankNum: number): any;
    getAllUsers(): User[];
    getUser(userId: string): {
        id: string;
        name: string;
        rank: number;
    };
    updateUser(userId: string, userName: string, rank: number): any;
    removeUser(userId: string): any;
}
