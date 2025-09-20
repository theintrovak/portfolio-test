import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/ThemeSlices";

const Theme = () => {
    const mode = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(toggleTheme())}
            style={
                mode === 'light' ?
                    { backgroundColor: 'black', color: 'white' }
                    :
                    { backgroundColor: 'white', color: 'black' }}
        >
            switch to = {mode === 'light' ? 'dark' : 'light'}
        </button>
    )

}