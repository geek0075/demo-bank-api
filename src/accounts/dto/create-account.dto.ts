import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAccountDto {
    @IsNotEmpty()
    @IsString()
    readonly accountNo: string;
    @IsNotEmpty()
    @IsNumber()
    readonly balance: number;
    
    constructor(accountNo: string, balance: number)     {
        this.accountNo = accountNo;
        this.balance = balance;
    }
}