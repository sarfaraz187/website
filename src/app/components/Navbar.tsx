import LanguageSwitcher from "@src/app/components/LanguageSwitcher";
import ThemeSwitcher from "@src/app/components/ThemeSwitcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@src/app/components/ui/navigation-menu";
import useIntl from "@src/hooks/useIntl";
import PathConstants from "@src/routes/PathConstants";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  const navLinks = [
    {
      name: intl("about"),
      path: PathConstants.about.root.path,
    },
    {
      name: intl("experience"),
      path: PathConstants.experience.root.path,
    },
  ];

  const handleClicked = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <a
        href={PathConstants.home.root.path}
        className="cursor-pointer"
        onClick={(e) => handleClicked(e, PathConstants.home.root.path)}
      >
        <img
          src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/mohammed.svg`}
          alt="logo"
        />
      </a>
      <div className="flex gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((navLink) => (
              <NavigationMenuItem
                key={navLink.path}
                className="relative flex items-center justify-center overflow-hidden"
              >
                <NavigationMenuLink
                  className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-nightRider after:transition-all after:duration-300 hover:after:w-full"
                  href={navLink.path}
                  onClick={(e) => handleClicked(e, navLink.path)}
                >
                  {navLink.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default NavBar;
