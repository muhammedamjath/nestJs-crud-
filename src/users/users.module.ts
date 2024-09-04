import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from './schema/users.schema';

@Module({
  controllers: [
    UsersController,
  ],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{name:user.name,schema:userSchema , collection:'userData'}])
  ]
})
export class UsersModule {}
  