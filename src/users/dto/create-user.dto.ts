import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'The full name of the user.',
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    readonly fullName: string;
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
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}