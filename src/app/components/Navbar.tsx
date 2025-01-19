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
      <div className="flex gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((navLink) => (
              <NavigationMenuItem
                key={navLink.path}
                className="hover:underline decoration-nightRider decoration-2 underline-offset-8"
              >
                <NavigationMenuLink
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
      </div>
    </>
  );
};

export default NavBar;
