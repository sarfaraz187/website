import LanguageSwitcher from "@src/app/components/LanguageSwitcher";
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
      name: intl("resources"),
      path: PathConstants.resources.root.path,
    },
  ];

  return (
    <>
      <div
        role="logo"
        className="cursor-pointer"
        onClick={() => navigate(PathConstants.home.root.path)}
      >
        <img src="/logo/mohammed.svg" alt="logo" />
      </div>
      <div className="flex gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((navLink) => (
              <NavigationMenuItem key={navLink.path}>
                <NavigationMenuLink onClick={() => navigate(navLink.path)}>
                  {navLink.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <LanguageSwitcher />
      </div>
    </>
  );
};

export default NavBar;
