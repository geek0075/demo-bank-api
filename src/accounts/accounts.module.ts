import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsService } from './accounts.service';
import { AccountSchema } from './schemas/account.schema';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { AccountsController } from './accounts.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]), TransactionsModule],
    providers: [AccountsService],
    exports: [AccountsService],
    controllers: [AccountsController],
})
export class AccountsModule {}
