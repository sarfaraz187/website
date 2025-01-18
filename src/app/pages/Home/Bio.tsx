import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import PathConstants from "@src/routes/PathConstants";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Bio = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <section className="pb-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 overflow-hidden max-w-[800px] mx-auto text-nightRider">
          <img
            src="/image/ms_01.png"
            alt="Mohammed Sarfaraz"
            className="w-3/4 h-auto object-cover rounded-b-3xl mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-nightRider">
          {intl("about.greeting")}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {intl("about.description")}
        </p>
        <Button
          variant="primary"
          onClick={() => navigate(PathConstants.about.root.path)}
        >
          {intl("about")}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Bio;
