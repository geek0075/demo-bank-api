import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Request() req) {
        return this.transactionsService.findAll(req.user.phone);
    }
}