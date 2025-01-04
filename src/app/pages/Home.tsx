import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const intl = useIntl();

  return (
    <section className="min-h-[80vh] bg-teaGreen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-[4rem] font-bold leading-tight mb-8">
          {intl("home.title")}
        </h1>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-800">{intl("home.subtitle")}</p>
        </div>

        <Button
          variant="outline"
          className="text-lg px-8 py-6 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
        >
          Start reading
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Home;
