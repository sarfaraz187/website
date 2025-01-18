import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const intl = useIntl();

  const handleEmailClick = () => {
    window.location.href = "mailto:sarfarazmohammed187@gmail.com";
  };

  return (
    <footer>
      {/* Contact Section */}
      <section className="px-[13%] py-12 text-nightRider bg-teaGreen">
        <div className="grid grid-rows-1 md:grid-cols-2 align-center">
          <h1 className="text-[6rem] font-bold ">{intl("footer.shallWe")}</h1>
          <div className="align-center">
            <p className="text-lg mb-6">{intl("footer.description")}</p>
            <Button variant="primary" onClick={handleEmailClick}>
              {intl("footer.emailMe")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <section className="px-[13%] py-12 bg-nightRider">
        <div className="flex gap-5 justify-end md:block">
          <Button
            variant="link"
            className="text-white"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mohammed-sarfaraz-g/",
                "_blank"
              )
            }
          >
            LinkedIn
          </Button>
          <Button
            variant="link"
            className="text-white"
            onClick={() =>
              window.open("https://www.instagram.com/safaraz_44/", "_blank")
            }
          >
            Instagram
          </Button>
          <Button
            variant="link"
            className="text-white"
            onClick={() =>
              window.open("https://github.com/sarfaraz187", "_blank")
            }
          >
            Github
          </Button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
