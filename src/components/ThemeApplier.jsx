import { useSelector } from "react-redux";
import { useEffect } from "react";

const ThemeApplier = () => {
    const mode = useSelector((state) => state.theme.mode);
    useEffect(() => {
        if (mode === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [mode]);
    return null
}
export default ThemeApplier