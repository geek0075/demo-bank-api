import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateAccountDto } from './dto/create-account.dto';
import { PartialTransactAccountDto } from './dto/partial-transact-account.dto';
import { TransactAccountDto } from './dto/transact-account.dto';
import { AccountsService } from './accounts.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @UseGuards(JwtAuthGuard)
    @Post('deposit')
    @ApiCreatedResponse({
        description: 'The deposit completed successfully.',
        type: Account,
    })
    deposit(@Request() req, @Body() transactAccountDto: PartialTransactAccountDto) {
        const accountDto = new TransactAccountDto(req.user.phone, transactAccountDto.amount)
        return this.accountsService.deposit(accountDto);
    }

    @UseGuards(JwtAuthGuard)
    @Post('withdraw')
    @ApiCreatedResponse({
        description: 'The withdraw completed successfully.',
        type: Account,
    })
    withdraw(@Request() req, @Body() transactAccountDto: PartialTransactAccountDto) {
        const accountDto = new TransactAccountDto(req.user.phone, transactAccountDto.amount)
        return this.accountsService.withdraw(accountDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOkResponse({
        description: 'The account was found successfully.',
        type: Account,
    })
    findOne(@Request() req) {
        return this.accountsService.findOne(req.user.phone);
    }
}