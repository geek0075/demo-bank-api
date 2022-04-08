import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PartialTransactAccountDto {
    @ApiProperty({
        description: 'The amount of the transaction.',
        required: true,
        type: Number,
    })
    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;
    
    constructor(amount: number)     {
        this.amount = amount;
    }
}