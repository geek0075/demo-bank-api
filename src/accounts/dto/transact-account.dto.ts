import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TransactAccountDto {
    @ApiProperty({
        description: 'The accountNo of the transaction.',
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    readonly accountNo: string;
    @ApiProperty({
        description: 'The amount of the transaction.',
        required: true,
        type: Number,
    })
    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
    
    constructor(accountNo: string, amount: number)     {
        this.accountNo = accountNo;
        this.amount = amount;
    }
}