"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServiceService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
let UsersServiceService = class UsersServiceService {
    constructor() {
        this.users = [];
    }
    addUser(name, rank) {
        const newUser = new users_model_1.User(new Date().toString(), name, rank);
        this.users.push(newUser);
    }
};
UsersServiceService = __decorate([
    (0, common_1.Injectable)()
], UsersServiceService);
exports.UsersServiceService = UsersServiceService;
//# sourceMappingURL=users-service.service.js.map