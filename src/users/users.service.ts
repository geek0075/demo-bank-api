import { Model, Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './interfaces/user.interface';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class UsersService {
    constructor(
        private accountsService: AccountsService,
        @InjectModel('User') private userModel: Model<UserDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const createdUser = new this.userModel(createUserDto);
            const userModel = await createdUser.save({session: session});
            const user: User = userModel['_doc'];
            console.log(`UsersService.create: user => ${JSON.stringify(user)}`);
            const createAccountDto: CreateAccountDto = new CreateAccountDto(user.phone, 0.0);
            const account = await this.accountsService.create(createAccountDto, session);
            await session.commitTransaction();
            return user;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
    
    async findOne(phone: string): Promise<User | undefined> {
        const user = await this.userModel.findOne({ phone: phone }).exec();
        console.log(`UsersService.findOne: user => ${JSON.stringify(user)}`)
        return user;
    }
}