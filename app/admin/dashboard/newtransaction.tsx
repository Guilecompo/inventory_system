import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const newTransactions = [
    {
        item: "HJC IS-17 Helmet",
        amount: "₱ 250",
    },
    {
        item: "Fox Racing 180 Motocross Pants",
        amount: "₱ 150",
    },
    {
        item: "Motul 300V Synthetic Oil (1L)",
        amount: "₱ 350",
    },
    {
        item: "K&N Air Filter",
        amount: "₱ 450",
    },
    {
        item: "Bell Qualifier DLX Helmet",
        amount: "₱ 550",
    },
]

export function NewTransactions() {
    return (
        <div className="max-h-[200px] sm:max-h-[250px] md:max-h-[350px] lg:max-h-[350px] overflow-y-auto">
            <Table className="min-w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {newTransactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-xs md:text-sm">{transaction.item}</TableCell>
                            <TableCell className="text-right text-xs md:text-sm">{transaction.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
