import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { LoginUserDto } from './users/dto/login-user.dto';
import { Token } from './users/entities/token.entity';
import { Profile } from './users/entities/profile.entity';
import { PartialUser } from './users/entities/partial-user.entity';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @Post('auth/register')
    @ApiCreatedResponse({
        description: 'The sign up completed successfully.',
        type: PartialUser,
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

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    @ApiOkResponse({
        description: 'The profile was found successfully.',
        type: Profile,
    })
    getProfile(@Request() req) {
        return req.user;
    }
}