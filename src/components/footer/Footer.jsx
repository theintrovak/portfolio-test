import React from 'react'

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-gray-100 py-8">
            <div className="container mx-auto flex flex-col items-center">
                <p className="mb-4">Connect with me:</p>
                <div className="flex space-x-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.6-.8s-.2-.5-.3-1c-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.3.3.6.9.6 1.8v2.7c0 .3.2.7.8.6A10.6 10.6 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                        </svg>
                    </a>

                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5c0 1.65 1.34 3 2.98 3h.02c1.64 0 2.98-1.35 2.98-3 0-1.65-1.34-3-2.98-3zm.02 5.5H2V21h5V9h-2zm7 0h-2v12h5v-6c0-3.31-4-3.13-4 0v6h5v-6c0-6.08 7-6 7 0v6h5v-9.5c0-5.52-6.48-5-7 0V9h-2z" />
                        </svg>
                    </a>

                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.36a9.15 9.15 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.13A12.86 12.86 0 0 1 1.64 1.15 4.52 4.52 0 0 0 3.1 6.68 4.48 4.48 0 0 1 .89 6.1v.05a4.52 4.52 0 0 0 3.63 4.44 4.52 4.52 0 0 1-2.05.08 4.53 4.53 0 0 0 4.22 3.13 9.05 9.05 0 0 1-5.6 1.93A9.3 9.3 0 0 1 0 18.57a12.76 12.76 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.02-.58A9.18 9.18 0 0 0 23 3z" />
                        </svg>
                    </a>
                </div>

                <p className="mt-4 text-sm text-gray-400">&copy; 2025 Your Name. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer