export class Transaction {
    readonly _id: string;
    readonly accountNo: string;
    readonly type: string;
    readonly date: Date;
    readonly amount: number;
    readonly balance: number;
}