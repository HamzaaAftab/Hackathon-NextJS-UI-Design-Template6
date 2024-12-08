import Image from "next/image"
import { Search } from 'lucide-react'

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-[1fr,300px] gap-16 px-4 py-5 sm:px-8 md:px-12 lg:px-16 ">
        {/* Main Content */}
        <div className="space-y-12">
          <article className="space-y-4">
            <Image
              src="/blog1.png"
              alt="Laptop and notebook on wooden desk"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Admin
              </span>
              <span>•</span>
              <span>14 Oct 2022</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                No Comments
              </span>
            </div>
            <h2 className="text-2xl font-semibold">Going all-in with millennial design</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisi magna vitae ultricies sed integer molestie nulla. In hac posuere sollicitudin
              pharetra ultrices. More faucett cursus nunc et dictum no tempus imperdiet. Libero ante sed faucibus turpis
              et. Cursus metus molestie a cursus et eget. Nisi cursus turpis non sed blandit vitae. Adipisicing elit sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="inline-block text-[#B88E2F] hover:underline">
              Read more
            </a>
          </article>

          <article className="space-y-4">
            <Image
              src="/blog2.png"
              alt="Writing on notebook with hat"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Admin
              </span>
              <span>•</span>
              <span>14 Oct 2022</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                No Comments
              </span>
            </div>
            <h2 className="text-2xl font-semibold">Exploring new ways of decorating</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisi magna vitae ultricies sed integer molestie nulla. In hac posuere sollicitudin
              pharetra ultrices. More faucett cursus nunc et dictum no tempus imperdiet. Libero ante sed faucibus turpis
              et. Cursus metus molestie a cursus et eget. Nisi cursus turpis non sed blandit vitae.
            </p>
            <a href="#" className="inline-block text-[#B88E2F] hover:underline">
              Read more
            </a>
          </article>

          <article className="space-y-4">
            <Image
              src="/blog3.png"
              alt="Writing on notebook with hat"
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Admin
              </span>
              <span>•</span>
              <span>14 Oct 2022</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                No Comments
              </span>
            </div>
            <h2 className="text-2xl font-semibold">Handmade pieces that took time to make</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nisi magna vitae ultricies sed integer molestie nulla. In hac posuere sollicitudin
              pharetra ultrices. More faucett cursus nunc et dictum no tempus imperdiet. Libero ante sed faucibus turpis
              et. Cursus metus molestie a cursus et eget. Nisi cursus turpis non sed blandit vitae.
            </p>
            <a href="#" className="inline-block text-[#B88E2F] hover:underline">
              Read more
            </a>
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <div className="space-y-8">
              <div className="flex justify-between items-center text-gray-600 hover:text-[#B88E2F]">
                <a href="#">Design</a>
                <span>(5)</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 hover:text-[#B88E2F]">
                <a href="#">Handmade</a>
                <span>(7)</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 hover:text-[#B88E2F]">
                <a href="#">Interior</a>
                <span>(3)</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 hover:text-[#B88E2F]">
                <a href="#">Wood</a>
                <span>(6)</span>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              <a href="#" className="flex gap-4 group">
                <Image
                  src="/blog1.png"
                  alt="Going all-in with millennial design"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-medium group-hover:text-[#B88E2F] leading-tight">
                    Going all-in with millennial design
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">14 Oct 2022</p>
                </div>
              </a>
              <a href="#" className="flex gap-4 group">
                <Image
                  src="/blog2.png"
                  alt="Exploring new ways of decorating"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-medium group-hover:text-[#B88E2F] leading-tight">
                    Exploring new ways of decorating
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">14 Oct 2022</p>
                </div>
              </a>
              <a href="#" className="flex gap-4 group">
                <Image
                  src="/blog3.png"
                  alt="Modern home in Japan"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-medium group-hover:text-[#B88E2F] leading-tight">Modern home in Japan</h4>
                  <p className="text-sm text-gray-500 mt-1">14 Oct 2022</p>
                </div>
              </a>
              <a href="#" className="flex gap-4 group">
                <Image
                  src="/blog2.png"
                  alt="Colorful office redesign"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-medium group-hover:text-[#B88E2F] leading-tight">Colorful office redesign</h4>
                  <p className="text-sm text-gray-500 mt-1">14 Oct 2022</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

