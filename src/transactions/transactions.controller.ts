import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOkResponse({
        description: 'The transactions were found successfully.',
        type: [Transaction],
    })
    findAll(@Request() req) {
        return this.transactionsService.findAll(req.user.phone);
    }
}