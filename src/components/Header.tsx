import ThemeToggle from "./Theme/ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 md:p-6 shadow-md">
      <div className="w-10"></div>
      <h1 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-headerTitlePrimary to-headerTitleSecondary bg-clip-text text-transparent">
        Tic Tac Toe Clash
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
