import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly fullName: string;
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}