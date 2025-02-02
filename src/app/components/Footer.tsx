import UnderLineLink from "@src/app/components/UnderlineLink";
import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import { Send } from "lucide-react";

const Footer = () => {
  const intl = useIntl();

  const handleEmailClick = () => {
    window.location.href = "mailto:sarfarazmohammed187@gmail.com";
  };

  return (
    <footer>
      {/* Contact Section */}
      <section className="px-[15%] py-[6rem] bg-teaGreen dark:bg-gray-800">
        <div className="grid grid-rows-1 md:grid-cols-2 align-center">
          <h1 className="text-[4rem] md:text-[6rem] mb-6 md:mb-0 font-bold dark:text-white">
            {intl("footer.shallWe")}
          </h1>
          <div className="align-center">
            <p className="text-lg mb-6">{intl("footer.description")}</p>
            <Button variant="primary" onClick={handleEmailClick}>
              <span>{intl("footer.emailMe")}</span>
              <Send
                size={22}
                strokeWidth={1.75}
                className="transition-transform group-hover:translate-x-2"
              />
            </Button>
          </div>
        </div>
      </section>
      <section className="px-[13%] my-[4rem] md:my-[8rem]">
        <div className="md:flex md:justify-end md:gap-[8rem] md:mr-[4rem]">
          <div>
            <h1 className="text-xl font-semibold mb-4 dark:text-white">
              {intl("footer.contact")}
            </h1>
            <div className="inline-flex flex-col gap-1">
              <UnderLineLink
                href="https://www.linkedin.com/in/mohammed-sarfaraz-g/"
                openInNewTab={true}
              >
                LinkedIn
              </UnderLineLink>
              <UnderLineLink
                href="https://www.instagram.com/safaraz_44"
                openInNewTab={true}
              >
                Instagram
              </UnderLineLink>
              <UnderLineLink
                href="https://github.com/sarfaraz187"
                openInNewTab={true}
              >
                Github
              </UnderLineLink>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-4 mt-6 md:mt-0 dark:text-white">
              {intl("footer.general")}
            </h1>
            <div className="inline-flex flex-col">
              <UnderLineLink
                href={import.meta.env.VITE_RESUME_SAS_URL}
                openInNewTab={true}
              >
                Resume
              </UnderLineLink>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
