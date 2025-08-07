import useTheme from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2.5 rounded-xl hover:bg-toggleBgColor bg-transparent text-textColor transition-all duration-200 hover:scale-105 border-2 border-transparent hover:border-winGlow/20 shadow-sm hover:shadow-md"
    >
      {theme === "light" ? (
        <Moon size={22} className="text-slate-600 hover:text-slate-800" />
      ) : (
        <Sun size={22} className="text-yellow-400 hover:text-yellow-300" />
      )}
    </button>
  );
}
