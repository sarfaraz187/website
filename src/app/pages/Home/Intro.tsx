import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import { ChevronRight } from "lucide-react";

export const Intro = () => {
  const intl = useIntl();

  return (
    <section className="flex items-center justify-center bg-teaGreen dark:bg-gray-800 py-[8rem]">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-[3rem] md:[4rem] font-bold leading-tight mb-8 dark:text-white">
          {intl("home.title")}
        </h1>
        <div className="space-y-4 mb-8">
          <p className="text-xl">{intl("home.subtitle")}</p>
        </div>
        <Button variant="primary">
          <span>Start reading</span>
          <ChevronRight
            size={22}
            strokeWidth={2.5}
            className="transition-transform group-hover:translate-x-2"
          />
        </Button>
      </div>
    </section>
  );
};

export default Intro;
