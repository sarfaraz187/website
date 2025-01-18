import { Button } from "@src/app/components/ui/button";
import useIntl from "@src/hooks/useIntl";
import { ArrowRight } from "lucide-react";

// import { useEffect, useRef } from "react";

const About = () => {
  console.log("About");
  const intl = useIntl();
  // const myRef = useRef<HTMLHeadingElement>(null);

  // useEffect(() => {
  //   if (myRef.current) {
  //     myRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <>
      <h1
        // ref={myRef}
        className="text-6xl text-nightRider font-bold px-[15%] my-[5%]"
      >
        I'm Mohammed Sarfaraz
      </h1>
      <section className="mt-16 grid grid-cols-1 mx-[15%] md:mx-0 md:pl-[15%] md:grid-cols-2">
        <div className="mb-12">
          <h1 className="text-xl font-medium tracking-wide my-6 text-nightRider">
            {intl("about.introduction.heading")}
          </h1>
          <p className="text-justify tracking-wide leading-8 text-lg indent-14 mb-16">
            {intl("about.introduction.expertise")}
          </p>
          <h1 className="text-xl font-medium tracking-wide mb-6 text-nightRider">
            {intl("about.introduction.heading")}
          </h1>
          <p className="text-justify tracking-wide leading-8 text-lg mb-12">
            {intl("about.introduction.expertise")}
          </p>
          <Button variant="primary" onClick={() => {}}>
            {intl("about")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="w-full h-full flex justify-end">
          <img
            src="/image/ms_02.png"
            alt="Mohammed Sarfaraz 02"
            className="w-full rounded-lg md:w-[80%] h-auto object-cover mb-128 md:rounded-l-[10rem]"
          />
        </div>
      </section>
      <section className="mt-16 grid grid-cols-1 mx-[15%] md:mx-0 md:grid-cols-2">
        <div className="w-full h-full flex justify-start">
          <img
            src="/image/schloss_castle.png"
            alt="Schloss Castle"
            className="w-full rounded-lg md:w-[80%] h-auto object-cover mb-128 md:rounded-r-[10rem]"
          />
        </div>
        <div>
          <h1 className="text-xl font-medium tracking-wide my-6 text-nightRider">
            {intl("about.introduction.heading")}
          </h1>
          <p className="text-justify tracking-wide leading-8 text-lg mb-16">
            {intl("about.introduction.expertise")}
          </p>
        </div>
      </section>
      <section className="px-[15%] my-[5%] ">
        <h1 className="flex justify-center text-4xl font-bold text-nightRider leading-tight mb-8">
          {intl("about.projects.title")}
        </h1>
      </section>
    </>
  );
};

export default About;
