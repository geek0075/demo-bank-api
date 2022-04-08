import { ApiProperty } from '@nestjs/swagger';

export class Account {
    @ApiProperty({
        description: 'The mongodb ObjectId of the account.',
        required: true,
        type: String,
    })
    readonly _id: string;
    @ApiProperty({
        description: 'The accountNo of the account.',
        required: true,
        type: String,
    })
    readonly accountNo: string;
    @ApiProperty({
        description: 'The balance of the account.',
        required: true,
        type: Number,
    })
    readonly balance: number;
}