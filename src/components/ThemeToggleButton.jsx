import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/ThemeSlices";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
    const mode = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(toggleTheme())}
            className={mode === "light" ? "text-gray-900 bg-transparent" : "text-white bg-bg-transparent"}>
            {mode === 'light' ? <Moon /> : <Sun />}
        </button >
    )

}

export default ThemeToggleButton