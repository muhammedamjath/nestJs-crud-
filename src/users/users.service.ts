import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(user.name) private userModel: Model<userDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<userDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<userDocument[]> {
    return this.userModel.find();
  }

  remove(id: string):Promise<userDocument> {
    return this.userModel.findByIdAndDelete(id)
  }
}
