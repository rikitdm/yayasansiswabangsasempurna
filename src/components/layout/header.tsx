
"use client";

import Link from "next/link";
import { Menu, HandHeart, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { label: "About Us", href: "#" },
  { label: "For Companies", href: "#" },
  { label: "For Nonprofits", href: "#" },
  { label: "Disasters", href: "#" },
  { label: "News & Stories", href: "#" },
  {
    label: "Ways to Give",
    dropdown: [
      { label: "One-time Donation", href: "#" },
      { label: "Monthly Giving", href: "#" },
      { label: "Corporate Matching", href: "#" },
    ],
  },
  { label: "Help", href: "#" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary font-headline">
            Cause Connector
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {menuItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium">
                    {item.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild>
                      <Link href={subItem.href} prefetch={false}>
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 transition-colors hover:text-foreground"
                prefetch={false}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-accent hover:bg-accent/90">
            <HandHeart className="mr-2 h-4 w-4" /> Donate
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <Mountain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary font-headline">
                  Cause Connector
                </span>
              </Link>
              <nav className="grid gap-2">
                {menuItems.map((item) =>
                  item.dropdown ? (
                     <div key={item.label} className="grid gap-1">
                        <p className="px-2 py-1.5 text-sm font-semibold">{item.label}</p>
                        {item.dropdown.map(d => 
                           <Link key={d.label} href={d.href} className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground" prefetch={false}>
                              {d.label}
                           </Link>
                        )}
                     </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline">Sign In</Button>
                <Button className="bg-accent hover:bg-accent/90">
                  <HandHeart className="mr-2 h-4 w-4" /> Donate
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
