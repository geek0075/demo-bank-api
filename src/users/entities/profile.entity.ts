import { ApiProperty } from '@nestjs/swagger';

export class Profile {
    @ApiProperty({
        description: 'The mongodb ObjectId of the user.',
        required: true,
        type: String,
    })
    readonly _id: string;
    @ApiProperty({
        description: 'The phone number of the user.',
        required: true,
        type: String,
    })
    readonly phone: string;
}