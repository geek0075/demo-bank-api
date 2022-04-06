import { Model, ClientSession, Connection } from 'mongoose';
import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { AccountDocument } from './interfaces/account.interface';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { TransactAccountDto } from './dto/transact-account.dto';
import { CreateTransactionDto } from 'src/transactions/dto/create-transaction.dto';
import { TransactionsService } from 'src/transactions/transactions.service';

@Injectable()
export class AccountsService {
    constructor(
        private transactionsService: TransactionsService,
        @InjectModel('Account') private accountModel: Model<AccountDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async create(createAccountDto: CreateAccountDto, session: ClientSession): Promise<Account> {
        let account: Account = null;
        try {
            const createdAccount = new this.accountModel(createAccountDto);
            let accountModel = null;
            if (session) {
                accountModel = await createdAccount.save({session: session});
            } else {
                accountModel = await createdAccount.save();
            }
            if (!accountModel) {
                throw new UnprocessableEntityException();
            }
            account = accountModel['_doc'];
            console.log(`AccountsService.create: account => ${JSON.stringify(account)}`)
            return account;
        } catch (error) {
            throw error;
        }
    }
    
    async deposit(transactAccountDto: TransactAccountDto) {
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const account = await this.accountModel.findOne({ accountNo: transactAccountDto.accountNo }, null, {session: session}).exec();
            console.log(`AccountsService.deposit: account => ${JSON.stringify(account)}`)
            if (!account) {
                throw new NotFoundException();
            }
            const newBalance = account.balance + transactAccountDto.amount;
            const newAccount = await this.accountModel.findOneAndUpdate({ accountNo: transactAccountDto.accountNo }, { balance: newBalance }, {new: true, session: session}).exec();
            console.log(`AccountsService.deposit: newAccount => ${JSON.stringify(newAccount)}`)
            const createTransactionDto: CreateTransactionDto = new CreateTransactionDto(transactAccountDto.accountNo, 'deposit', new Date(), transactAccountDto.amount);
            const transaction = await this.transactionsService.create(createTransactionDto, session);
            console.log(`AccountsService.deposit: transaction => ${JSON.stringify(transaction)}`)
            await session.commitTransaction();
            return newAccount;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
    
    async withdraw(transactAccountDto: TransactAccountDto) {
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const account = await this.accountModel.findOne({ accountNo: transactAccountDto.accountNo }, null, {session: session}).exec();
            console.log(`AccountsService.withdraw: account => ${JSON.stringify(account)}`)
            if (!account) {
                throw new NotFoundException();
            }
            const newBalance = account.balance - transactAccountDto.amount;
            const newAccount = await this.accountModel.findOneAndUpdate({ accountNo: transactAccountDto.accountNo }, { balance: newBalance }, {new: true, session: session}).exec();
            console.log(`AccountsService.withdraw: newAccount => ${JSON.stringify(newAccount)}`)
            const createTransactionDto: CreateTransactionDto = new CreateTransactionDto(transactAccountDto.accountNo, 'withdraw', new Date(), transactAccountDto.amount);
            const transaction = await this.transactionsService.create(createTransactionDto, session);
            console.log(`AccountsService.withdraw: transaction => ${JSON.stringify(transaction)}`)
            await session.commitTransaction();
            return newAccount;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async findOne(accountNo: string): Promise<Account | undefined> {
        const account = await this.accountModel.findOne({ accountNo: accountNo }).exec();
        console.log(`AccountsService.findOne: account => ${JSON.stringify(account)}`)
        return account;
    }
}
