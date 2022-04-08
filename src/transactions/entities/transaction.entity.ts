import { ApiProperty } from '@nestjs/swagger';

export class Transaction {
    @ApiProperty({
        description: 'The mongodb ObjectId of the transaction.',
        required: true,
        type: String,
    })
    readonly _id: string;
    @ApiProperty({
        description: 'The accountNo of the transaction.',
        required: true,
        type: String,
    })
    readonly accountNo: string;
    @ApiProperty({
        description: 'The type of the transaction.',
        required: true,
        enum: ['deposit', 'withdraw'],
    })
    readonly type: string;
    @ApiProperty({
        description: 'The date of the transaction.',
        required: true,
        type: Date,
    })
    readonly date: Date;
    @ApiProperty({
        description: 'The amount of the transaction.',
        required: true,
        type: Number,
    })
    readonly amount: number;
    @ApiProperty({
        description: 'The balance of the account after transaction.',
        required: true,
        type: Number,
    })
    readonly balance: number;
}