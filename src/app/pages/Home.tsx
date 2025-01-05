import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import PathConstants from "@src/routes/PathConstants";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <>
      {/* Title Section */}
      <section className="flex items-center justify-center bg-teaGreen py-[6rem]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-[4rem] font-bold leading-tight mb-8">
            {intl("home.title")}
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-xl text-gray-800">{intl("home.subtitle")}</p>
          </div>
          <Button variant="primary">
            Start reading <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      {/* About Me */}
      <section className="pb-16 px-4 flex flex-col items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 overflow-hidden max-w-[800px] mx-auto">
            <img
              src="/image/mohammed_sarfaraz_img.jpeg"
              alt="Mohammed Sarfaraz"
              className="w-3/4 h-auto object-cover rounded-b-3xl mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-6">{intl("about.greeting")}</h1>
          <p className="text-xl text-gray-600 mb-6">
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
    </>
  );
};

export default Home;
