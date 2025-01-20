import { Button } from "@src/app/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollNavigation = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 250 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Button
          variant={"rounded"}
          className="fixed right-3 bottom-3 z-50 bg-teaGreen p-2 group"
          onClick={handleButtonClick}
        >
          <ChevronUp
            size={22}
            strokeWidth={2.5}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </Button>
      )}
    </>
  );
};

export default ScrollNavigation;
