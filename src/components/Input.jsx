import React from 'react'

const Input = ({ type = "text", placeholder, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
            {...props}
        />
    )
};

export default Input