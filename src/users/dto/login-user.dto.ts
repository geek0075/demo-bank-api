import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
    @ApiProperty({
        description: 'The phone number of the user.',
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
    @ApiProperty({
        description: 'The password of the user.',
        required: false,
        type: String,
    })
    @IsString()
    readonly password: string;
}