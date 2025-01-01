import Link from 'next/link'
import { FaFacebook, FaTwitter,  } from "react-icons/fa"; // Importing icons for each link


export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          {/* Section 1: About Us */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-4xl font-semibold text-white hover:text-blue-100 transition duration-300"
            >
              ATech
            </Link>
            <p className="text-gray-200 text-lg">
              Discover insightful resources and tools to shape your future in technology and education.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.facebook.com/" className="text-gray-200 hover:text-blue-100 transition duration-300">
                <i className="fab fa-facebook"></i><FaFacebook/>
              </Link>
             
              <Link href="https://www.linkedin.com/" className="text-gray-200 hover:text-blue-100 transition duration-300">
                <i className="fab fa-linkedin"></i> <FaTwitter/>
              </Link>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Blogs', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-200 hover:text-blue-100 hover:underline transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Educational Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Educational Resources</h3>
            <ul className="space-y-3">
              {['Courses', 'Tutorials', 'Webinars', 'Events'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-200 hover:text-blue-100 hover:underline transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* New Section: Subscribe (completely redesigned) */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 mt-12 rounded-lg bg-gray-800 p-8 relative">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Join Our Learning Community
            </h3>
            <p className="text-gray-300 mb-6">
              Stay up-to-date with the latest in educational technology and resources delivered straight to your inbox.
            </p>
            
            <div className="flex justify-center items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md w-1/2 text-gray-700 placeholder-gray-400 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300"
              >
                Subscribe Now
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-center text-gray-400">
            © {currentYear} Atech. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse opacity-50 animation-delay-2000" />
      </div>
    </footer>
  )
}
