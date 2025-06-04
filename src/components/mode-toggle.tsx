import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme === "dark");

    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button 
            onClick={toggleTheme} 
            className="fixed bottom-4 right-4 p-2 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 text-black dark:text-white shadow-lg border-2 border-gray-500 dark:border-gray-300 transition-all"
        >
            <div className="relative w-6 h-6">
                <Sun className={`absolute inset-0 h-full w-full transition-transform duration-300 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
                <Moon className={`absolute inset-0 h-full w-full transition-transform duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
