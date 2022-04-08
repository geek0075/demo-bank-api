import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TransactAccountDto {
    @IsNotEmpty()
    @IsString()
    readonly accountNo: string;
    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
    
    constructor(accountNo: string, amount: number)     {
        this.accountNo = accountNo;
        this.amount = amount;
    }
}