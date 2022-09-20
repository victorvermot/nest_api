import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./users.model";


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUser(@Body('name') userName: string,
          @Body('rank') rankNum: number)
    : any {
    const generatedId = this.usersService.addUser(userName, rankNum);
    return {id: generatedId};
  }

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getUser(userId);
  }

  @Patch(':id')
  updateUser(@Param('id') userId: string,
             @Body('name') userName: string,
             @Body('rank') rank: number) {
    this.usersService.updateUser(userId, userName, rank);
    return null;
  }

  @Delete(':id')
  removeUser(@Param('id') userId: string) {
    this.usersService.deleteProduct(userId);
    return null;
  }
}
