'use client'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-6 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side - Text content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-white">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              We’d love to hear from you. If you have any questions or need assistance, drop us a message. We’ll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              {/* Email Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-200">Email</h2>
                <p className="mt-2 text-gray-400">
                  Have any questions? Email us directly and we’ll get back to you.
                </p>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center mt-4 text-red-600 hover:text-red-400 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-1 12v-4h2v4h3l-4 4-4-4h3z"
                    />
                  </svg>
                  <strong>aneeqedward@outlook.com</strong>
                </a>
              </div>

              {/* Social Media Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-200">Follow Us</h2>
                <p className="mt-2 text-gray-400">Keep up with the latest updates:</p>
                <ul className="flex space-x-6 mt-4">
                  {['facebook', 'linkedin', 'instagram'].map((social) => (
                    <li key={social} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                      <a
                        href={`https://www.${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-600 transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {social === 'facebook' && (
                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                          )}
                          {social === 'linkedin' && (
                            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                          )}
                          {social === 'instagram' && (
                            <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C9.239 7 7 9.239 7 12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12C17 9.239 14.761 7 12 7ZM18.5 6.75C18.5 6.33579 18.1642 6 17.75 6C17.3358 6 17 6.33579 17 6.75C17 7.16421 17.3358 7.5 17.75 7.5C18.1642 7.5 18.5 7.16421 18.5 6.75ZM12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9Z" />
                          )}
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
