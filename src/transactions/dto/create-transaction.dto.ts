import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTransactionDto {
    @ApiProperty({
        description: 'The accountNo of the transaction.',
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    readonly accountNo: string;
    @ApiProperty({
        description: 'The type of the transaction (deposit|withdraw).',
        required: true,
        type: String,
        enum: ['deposit', 'withdraw'],
    })
    @IsNotEmpty()
    @IsString()
    readonly type: string;
    @ApiProperty({
        description: 'The date of the transaction.',
        required: true,
        type: Date,
    })
    @IsNotEmpty()
    @IsString()
    readonly date: Date;
    @ApiProperty({
        description: 'The amount of the transaction.',
        required: true,
        type: Number,
    })
    @IsNumber()
    readonly amount: number;
    @ApiProperty({
        description: 'The balance of the account after transaction.',
        required: true,
        type: Number,
    })
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