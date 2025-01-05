import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";

const Footer = () => {
  const intl = useIntl();

  return (
    <footer>
      {/* Contact Section */}
      <section className="px-[13%] py-12 bg-teaGreen">
        <div className="grid grid-rows-1 grid-cols-2 align-center">
          <h1 className="text-[6rem] font-bold">{intl("footer.shallWe")}</h1>
          <div className="align-center">
            <p className="text-lg mb-6">{intl("footer.description")}</p>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              {intl("footer.emailMe")}
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-nightRider">
        <div className="text-white">fasdf</div>
      </section>
    </footer>
  );
};

export default Footer;
