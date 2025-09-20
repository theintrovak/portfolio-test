import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../store/Slices"
import { Menu, X, Sun, Moon } from "lucide-react"   // icons

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const theme = useSelector((state) => state.theme.mode)
    const dispatch = useDispatch()

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="sticky top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    MyPortfolio
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => dispatch(toggleTheme())}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                    >
                        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}
