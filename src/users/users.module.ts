import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), AccountsModule],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}