import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@src/app/components/ui/navigation-menu";
import PathConstants from "@src/routes/PathConstants";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "About Me",
      path: PathConstants.about.root.path,
    },
    {
      name: "Resources",
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
    </>
  );
};

export default NavBar;
