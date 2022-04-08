import { ApiProperty } from '@nestjs/swagger';

export class Token {
    @ApiProperty({
        description: 'The jwt token.',
        required: true,
        type: String,
    })
    readonly access_token: string;
}