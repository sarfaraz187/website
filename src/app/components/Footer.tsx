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
      <section className="px-[13%] py-12 text-nightRider bg-teaGreen">
        <div className="grid grid-rows-1 md:grid-cols-2 align-center">
          <h1 className="text-[6rem] font-bold ">{intl("footer.shallWe")}</h1>
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
      <section className="px-[13%] py-12 bg-nightRider">
        <div className="flex gap-12">
          <UnderLineLink
            href="https://www.linkedin.com/in/mohammed-sarfaraz-g/"
            openInNewTab={true}
            className="text-seaShell"
          >
            LinkedIn
          </UnderLineLink>
          <UnderLineLink
            href="https://www.instagram.com/safaraz_44"
            openInNewTab={true}
            className="text-seaShell"
          >
            Instagram
          </UnderLineLink>
          <UnderLineLink
            href="https://github.com/sarfaraz187"
            openInNewTab={true}
            className="text-seaShell"
          >
            Github
          </UnderLineLink>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
