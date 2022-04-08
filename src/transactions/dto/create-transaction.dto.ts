import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTransactionDto {
    @IsNotEmpty()
    @IsString()
    readonly accountNo: string;
    @IsNotEmpty()
    @IsString()
    readonly type: string;
    @IsNotEmpty()
    @IsString()
    readonly date: Date;
    @IsNumber()
    readonly amount: number;
    @IsNumber()
    readonly balance: number;
    
    constructor(accountNo: string, type: string, date: Date, amount: number, balance: number)     {
        this.accountNo = accountNo;
        this.type = type;
        this.date = date;
        this.amount = amount;
        this.balance = balance;
    }
}