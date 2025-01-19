import { Button } from "@src/app/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollNavigation = () => {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant={"rounded"}
      className="fixed right-3 bottom-3 z-50 bg-teaGreen p-3 group"
      onClick={handleButtonClick}
    >
      <ArrowUp className="transition-transform group-hover:-translate-y-0.5" />
    </Button>
  );
};

export default ScrollNavigation;
