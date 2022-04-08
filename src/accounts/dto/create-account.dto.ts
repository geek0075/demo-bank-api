import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAccountDto {
    @ApiProperty({
        description: 'The accountNo of the account.',
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    readonly accountNo: string;
    @ApiProperty({
        description: 'The balance of the account.',
        required: true,
        type: Number,
    })
    @IsNotEmpty()
    @IsNumber()
    readonly balance: number;
    
    constructor(accountNo: string, balance: number)     {
        this.accountNo = accountNo;
        this.balance = balance;
    }
}