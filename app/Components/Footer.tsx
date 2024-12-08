export default function Footer() {
    return (
      <footer className="px-4 py-5 sm:px-8 md:px-12 lg:px-16 border-t mt-8 border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-medium mb-4">Funiro.</h2>
            <address className="not-italic text-sm text-gray-600">
              <p>400 University Drive Suite 200 Coral</p>
              <p>Gables,</p>
              <p>FL 33134 USA</p>
            </address>
          </div>
  
          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-4">Links</h3>
            <nav className="flex flex-col gap-4">
              <a href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</a>
              <a href="/shop" className="text-sm text-gray-600 hover:text-gray-900">Shop</a>
              <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
              <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
  
          {/* Help */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-4">Help</h3>
            <nav className="flex flex-col gap-4">
              <a href="/payment-options" className="text-sm text-gray-600 hover:text-gray-900">Payment Options</a>
              <a href="/returns" className="text-sm text-gray-600 hover:text-gray-900">Returns</a>
              <a href="/privacy-policies" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policies</a>
            </nav>
          </div>
  
          {/* Newsletter */}
          <div className="md:col-span-5">
            <h3 className="text-sm font-medium mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-16">
          <p className="text-sm text-gray-600">2023 funiro. All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  