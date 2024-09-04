import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userDocument } from './schema/users.schema';
import { promises } from 'dns';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto):Promise<userDocument> {    
    return this.usersService.create(createUserDto);
  }

  @Get()
  async getUsers(): Promise<userDocument[]> {
    return this.usersService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('delete');
    return this.usersService.remove(id);
  }
}
