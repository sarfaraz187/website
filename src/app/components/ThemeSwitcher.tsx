import { Button } from "@src/app/components/ui/button";
import { useTheme } from "@src/theme-provider";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleBtnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      className="relative flex items-center justify-center overflow-hidden rounded-full border hover:border-nightRider hover:bg-seaShell p-2 w-10 h-10 dark:bg-gray-900"
      size="icon"
      onClick={handleBtnClick}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-500 translate-x-0 scale-100 dark:-translate-x-8 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-500 translate-x-8 scale-0 dark:translate-x-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitcher;
