import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import { ArrowRight } from "lucide-react";

export const Intro = () => {
  const intl = useIntl();

  return (
    <section className="flex items-center justify-center bg-teaGreen py-[6rem]">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-[4rem] font-bold text-nightRider leading-tight mb-8">
          {intl("home.title")}
        </h1>
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-800 text-nightRider">
            {intl("home.subtitle")}
          </p>
        </div>
        <Button variant="primary">
          Start reading <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Intro;
