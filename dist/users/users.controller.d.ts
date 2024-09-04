import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { userDocument } from './schema/users.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<userDocument>;
    getUsers(): Promise<userDocument[]>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/users.schema").user> & import("./schema/users.schema").user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
