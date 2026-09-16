import { useContext } from "react"

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <button onClick={toggleTheme}>
            Mudar para o tema {theme === 'light' ? 'escuro' : 'claro'}
        </button>
    );
}

export default ThemeToggleButton;