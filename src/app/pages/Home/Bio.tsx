import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import PathConstants from "@src/routes/PathConstants";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const Bio = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <section className="pb-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 overflow-hidden max-w-[800px] mx-auto">
          <img
            src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/ms_01.png`}
            alt="Mohammed Sarfaraz"
            className="w-3/4 h-auto object-cover rounded-b-3xl mx-auto"
            loading="lazy"
          />
        </div>
        <h1 className="text-4xl font-bold mb-8 dark:text-white">
          {intl("about.greeting")}
        </h1>
        <div className="mb-8 w-full flex justify-center">
          <p className="text-xl text-gray-600 w-9/12 ">
            {intl("about.description")}
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => navigate(PathConstants.about.root.path)}
        >
          <span>{intl("about")}</span>
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

export default Bio;
