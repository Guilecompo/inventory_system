"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  ChartSpline,
  FileText,
  Home,
  Menu,
  Package,
  Package2,
  PackageX,
  Users
} from "lucide-react"
import Link from "next/link"
import { BestSeller } from "./bestseller"
import Dropdown from "./dropdown"
import { NewTransactions } from "./newtransaction"
import SalesChart from "./saleschart"


const AdminDashboard = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Company Name</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="./dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary text-md mt-2 mb-3"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="./inventory"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-md mb-3"
              >
                <Package className="h-5 w-5" />
                Inventory{" "}
              </Link>
              <Link
                href="./sales"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-md mb-3"
              >
                <ChartSpline className="h-5 w-5" />
                Sales
              </Link>
              <Link
                href="./users"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-md mb-3"
              >
                <Users className="h-5 w-5" />
                Users
              </Link>
              <Link
                href="./reports"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-md"
              >
                <FileText  className="h-5 w-5" />
                Reports
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="./dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 bg-muted text-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="./inventory"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Inventory
                </Link>
                <Link
                  href="./sales"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <ChartSpline className="h-5 w-5" />
                  Sales
                </Link>
                <Link
                  href="./users"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Users
                </Link>
                <Link
                  href="./reports"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <FileText className="h-5 w-5" />
                  Reports
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {/* the main content is here! */}
        <main className="flex flex-1 flex-col gap-4 p-3 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          {/* NOTE: Branch */}
          <div className="pl-3">
            <Dropdown />
          </div>

          {/* Cards: adjust grid for responsiveness */}
          <div className="grid gap-2 md:grid-rows-1">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
                <div className="col-span-12 p-2">
                  {/* cards */}
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
                      <div>
                        <Card className="bg-[#b9e0ff] h-[100px] flex flex-col justify-between">
                          <CardContent className="flex flex-row items-center justify-evenly h-full text-[#11295a]">
                              <div className="flex items-center">
                                  <ChartSpline className="h-6 w-6" /> {/* Icon */}
                              </div>
                              <div className="flex flex-col items-start">
                                  <span className="text-sm">Total Sale Amount</span> {/* Total Sale text */}
                                  <span className="text-md font-semibold">₱ 10,000</span> {/* Value */}
                              </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div>
                        <Card className="bg-[#52b4ff] h-[100px] flex flex-col justify-between">
                          <CardContent className="flex flex-row items-center justify-evenly h-full text-[#11295a]">
                              <div className="flex items-center">
                                  <Package className="h-6 w-6" /> {/* Icon */}
                              </div>
                              <div className="flex flex-col items-start">
                                  <span className="text-sm">Low Stock</span> {/* Low Stock text */}
                                  <span className="text-md font-semibold">5</span> {/* Value */}
                              </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div>
                        <Card className="bg-[#b9e0ff] h-[100px] flex flex-col justify-between">
                          <CardContent className="flex flex-row items-center justify-evenly h-full text-[#11295a]">
                              <div className="flex items-center">
                                  <Package className="h-6 w-6" /> {/* Icon */}
                              </div>
                              <div className="flex flex-col items-start">
                                  <span className="text-sm">Out of Stock</span> {/* Out of Stock text */}
                                  <span className="text-md font-semibold">2</span> {/* Value */}
                              </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div>
                        <Card className="bg-[#b9e0ff] h-[100px] flex flex-col justify-between">
                          <CardContent className="flex flex-row items-center justify-evenly h-full text-[#11295a]">
                              <div className="flex items-center">
                                  <PackageX className="h-6 w-6" /> {/* Icon */}
                              </div>
                              <div className="flex flex-col items-start">
                                  <span className="text-sm">Defective Item</span> {/* Defect text */}
                                  <span className="text-md font-semibold">30</span> {/* Value */}
                              </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 p-2"> {/* 80% width (4 out of 5) */}
                  {/* Content for the first column in the first row */}

                  {/* Sales chart */}
                  <div className="flex flex-col md:flex-row gap-1">
                    <div className="w-full md:w-1/2">
                      {/* 1st content */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Sales Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <SalesChart />
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-full md:w-1/2">
                      {/* 2nd content */}
                      <Card className="h-[280px] sm:h-[340px] md:h-[440px] lg:h-[440px] rounded-xl ">
                        <CardHeader>
                          <CardTitle>Best Seller</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <BestSeller />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 mt-2">
                  <Card className="h-[280px] sm:h-[340px] md:h-[440px] lg:h-[440px] rounded-xl mb-2">
                    <CardHeader>
                      <CardTitle>Recent Transaction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <NewTransactions />
                    </CardContent>
                  </Card>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard