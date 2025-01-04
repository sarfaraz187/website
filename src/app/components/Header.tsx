import NavBar from "@src/app/components/Navbar";

const Header = () => {
  console.log("Header");
  return (
    <header
      role="banner"
      className=" w-full flex justify-between px-[15%] my-[3%]"
    >
      <NavBar />
    </header>
  );
};



export default Header;
