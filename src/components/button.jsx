const Button = ({ children, variant = "primary" }) => {
    const base =
        "px-6 py-3 rounded-xl font-semibold shadow-md transition-transform duration-300 hover:scale-105";
    const styles = {
        primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
        secondary: `${base} bg-pink-500 text-white hover:bg-pink-600`,
        outline: `${base} border border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`,
    };
    return <button className={styles[variant]}>{children}</button>;
};
export default Button