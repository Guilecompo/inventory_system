import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const bestsellers = [
    {
        item: "HJC IS-17 Helmet",
        sales: "250",
    },
    {
        item: "Fox Racing 180 Motocross Pants",
        sales: "150",
    },
    {
        item: "Motul 300V Synthetic Oil (1L)",
        sales: "350",
    },
    {
        item: "K&N Air Filter",
        sales: "450",
    },
    {
        item: "Bell Qualifier DLX Helmet",
        sales: "550",
    },
];

export function BestSeller() {
    return (
        <div className="max-h-[200px] sm:max-h-[250px] md:max-h-[350px] lg:max-h-[350px] overflow-y-auto">
            <Table className="min-w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">Sales</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bestsellers.map((bestseller, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-xs md:text-sm">{bestseller.item}</TableCell>
                            <TableCell className="text-right text-xs md:text-sm">{bestseller.sales}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
