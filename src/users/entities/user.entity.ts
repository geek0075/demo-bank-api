import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({
        description: 'The mongodb ObjectId of the user.',
        required: true,
        type: String,
    })
    readonly _id: string;
    @ApiProperty({
        description: 'The full name of the user.',
        required: true,
        type: String,
    })
    readonly fullName: string;
    @ApiProperty({
        description: 'The phone number of the user.',
        required: true,
        type: String,
    })
    readonly phone: string;
    @ApiProperty({
        description: 'The password of the user.',
        required: true,
        type: String,
    })
    password: string;
}