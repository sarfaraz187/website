import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@src/app/components/ui/navigation-menu";
import { Link } from "react-router";

const Header = () => {
  console.log("Header");
  return (
    <header role="banner" className="flex items-center px-[15%] my-[3%] w-full">
      <div role="logo"></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink>Resources</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink>About Me</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink>Hello</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
