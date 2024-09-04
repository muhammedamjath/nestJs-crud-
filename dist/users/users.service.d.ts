import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { userDocument } from './schema/users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<userDocument>);
    create(createUserDto: CreateUserDto): Promise<userDocument>;
    findAll(): Promise<userDocument[]>;
    remove(id: string): Promise<userDocument>;
}
