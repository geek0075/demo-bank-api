import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { LoginUserDto } from './users/dto/login-user.dto';
import { User } from './users/entities/user.entity';
import { Token } from './users/entities/token.entity';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @Post('auth/register')
    @ApiCreatedResponse({
        description: 'The sign up completed successfully.',
        type: User,
    })
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @ApiBody({ type: [LoginUserDto] })
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @ApiCreatedResponse({
        description: 'The sign in completed successfully.',
        type: Token,
    })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    @ApiOkResponse({
        description: 'The account was found successfully.',
        type: User,
    })
    getProfile(@Request() req) {
        return req.user;
    }
}