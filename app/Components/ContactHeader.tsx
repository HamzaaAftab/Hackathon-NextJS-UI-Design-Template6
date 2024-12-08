import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from "@/components/ui/button"
  import { Filter, LayoutGrid } from 'lucide-react'
  import Link from "next/link"
  
  export default function ContactHeader() {
    return (
      <div className="relative w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-[200px] -z-10 brightness-[0.85]"
          style={{
            backgroundImage: "url('shop.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <div className="space-y-6">
            {/* Title and Breadcrumbs */}
            <div className="space-y-1">
              <Link href='/contact' >
              <p className="text-4xl mx-auto font-medium text-center">Contact</p>
              </Link>
              <nav className="flex justify-center items-center space-x-1 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
                <span>&gt;</span>
                <Link href='/contact'>
                <span className="text-foreground">Contact</span>
                </Link>
                

              </nav>
            </div>
  
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <LayoutGrid className="h-4 w-4" />
                  <span className="sr-only">Grid view</span>
                </Button>
                <span className="text-sm text-muted-foreground">
                  Showing 1-16 of 32 results
                </span>
              </div>
  
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Show</span>
                  <Select defaultValue="15">
                    <SelectTrigger className="w-[70px]">
                      <SelectValue placeholder="15" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
  
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Sort by</span>
                  <Select defaultValue="default">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Default" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  