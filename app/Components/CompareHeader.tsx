
import Link from "next/link"
  
export default function CompareHeader() {
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
            <Link href='/compare'>
            <p className="text-4xl mx-auto font-medium text-center" >Product Comparison</p>
            </Link>
            <nav className="flex justify-center items-center space-x-1 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <Link href="/compare">
              <span className="text-foreground">Product Comparison</span>
              </Link>
            </nav>
          </div>

          
        </div>
      </div>
    </div>
  )
}

