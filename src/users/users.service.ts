import { Injectable, NotFoundException } from "@nestjs/common";

import { User } from './users.model'

@Injectable()
export class UsersService {
  private users: User[] = [];

  addUser(name: string, rank: number) {
    const userId = Math.random().toString();
    const newUser = new User(userId, name, rank);
    this.users.push(newUser);
    return userId;
  }

  getUsers() {
    return [...this.users];
  }

  getUser(userId: string) {
    const user = this.findProduct(userId)[0];
    return {...user};
  }

  updateUser(userId: string, name: string, rank: number) {
    const [user, index] = this.findProduct(userId);
    const updatedUser = {...user};
    if (name) {
      updatedUser.name = name;
    }
    if (rank) {
      updatedUser.rank = rank;
    }
    this.users[index] = updatedUser;
  }

  deleteProduct(userId: string) {
    const [_, index] = this.findProduct(userId);
    this.users.splice(index, 1);
  }

  private findProduct(id: string): [User, number] {
    const userIndex = this.users.findIndex((prod) => prod.id === id);
    const user = this.users[userIndex];
    if (!user) {
      throw new NotFoundException('Could not find user');
    }
    return [user, userIndex];
  }
}
