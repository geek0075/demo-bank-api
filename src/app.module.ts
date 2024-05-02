import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
    imports: [
        // MongooseModule.forRoot('mongodb+srv://geek:Secret1@cluster0.ywr67.mongodb.net/bank-demo?retryWrites=true&w=majority'),
        MongooseModule.forRoot('mongodb+srv://geek:Secret1@@cluster0.ivdiipj.mongodb.net/bank-demo?retryWrites=true&w=majority'),
        AuthModule,
        UsersModule,
        AccountsModule,
        TransactionsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
