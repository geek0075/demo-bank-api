import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsService } from './transactions.service';
import { TransactionSchema } from './schemas/transaction.schema';
import { TransactionsController } from './transactions.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }])],
    providers: [TransactionsService],
    exports: [TransactionsService],
    controllers: [TransactionsController],
})
export class TransactionsModule {}
