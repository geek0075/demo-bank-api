import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && user.password === pass) {
            return user;
        }
        return null;
    }

    async login(user: User) {
        const payload = { phone: user.phone, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(createUserDto: CreateUserDto): Promise<any> {
        const user = await this.usersService.create(createUserDto);
        if (user) {
            console.log(`AuthService.register: user => ${JSON.stringify(user)}`)
            const { password, ...result } = user;
            console.log(`AuthService.register: result => ${JSON.stringify(result)}`)
            return result;
        }
        return null;
    }
}