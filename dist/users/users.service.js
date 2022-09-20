"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    addUser(name, rank) {
        const userId = Math.random().toString();
        const newUser = new users_model_1.User(userId, name, rank);
        this.users.push(newUser);
        return userId;
    }
    getUsers() {
        return [...this.users];
    }
    getUser(userId) {
        const user = this.findProduct(userId)[0];
        return Object.assign({}, user);
    }
    updateUser(userId, name, rank) {
        const [user, index] = this.findProduct(userId);
        const updatedUser = Object.assign({}, user);
        if (name) {
            updatedUser.name = name;
        }
        if (rank) {
            updatedUser.rank = rank;
        }
        this.users[index] = updatedUser;
    }
    deleteProduct(userId) {
        const [_, index] = this.findProduct(userId);
        this.users.splice(index, 1);
    }
    findProduct(id) {
        const userIndex = this.users.findIndex((prod) => prod.id === id);
        const user = this.users[userIndex];
        if (!user) {
            throw new common_1.NotFoundException('Could not find user');
        }
        return [user, userIndex];
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map