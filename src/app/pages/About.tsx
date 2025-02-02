import CustomCard from "@src/app/components/CustomCard";
import useIntl from "@src/hooks/useIntl";

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
        className="text-[2.5rem] font-bold dark:text-white px-[15%] my-[5rem]"
      >
        {intl("about.title") + ", " + intl("about.occupation")}
      </h1>

      <section className="grid grid-cols-1 mx-[15%] md:mx-0 md:pl-[15%] md:grid-cols-2">
        <div className="mb-12">
          <h1 className="text-2xl font-medium tracking-wide mb-4 dark:text-white">
            {intl("about.subTitle")}
          </h1>
          <p className="text-xl text-justify tracking-wide leading-8 mb-16 text-gray dark:text-slate">
            {intl("about.location")}
          </p>
          <h1 className="text-2xl font-medium tracking-wide mb-4 dark:text-white">
            {intl("about.introduction.heading")}
          </h1>
          <p className=" text-xl text-justify tracking-wide leading-8 indent-14 mb-16 text-gray dark:text-slate">
            {intl("about.introduction.expertise")}
          </p>
        </div>
        <div className="w-full h-full flex justify-end">
          <img
            src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/ms_02.png`}
            alt={intl("about.altText.myName")}
            className="w-full rounded-lg md:w-[80%] h-auto object-cover mb-128 md:rounded-l-[10rem]"
          />
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 mx-[15%] md:mx-0 md:grid-cols-2 md:pr-[15%]">
        <div className="w-full h-full flex justify-start">
          <img
            src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/schloss_castle.png`}
            alt={"about.altText.castle"}
            className="w-full rounded-lg md:w-[80%] h-auto object-cover mb-128 md:rounded-r-[10rem]"
          />
        </div>
        <div>
          <h1 className="text-2xl font-medium tracking-wide my-6 dark:text-white">
            {intl("about.values.heading")}
          </h1>
          <h3 className="text-xl font-medium tracking-wide mb-2 dark:text-white">
            {intl("about.values.grateful")}
          </h3>
          <p className="text-xl text-justify tracking-wide leading-8 mb-8 text-gray dark:text-slate">
            {intl("about.values.gratefulPassage")}
          </p>
          <h3 className="text-xl font-medium tracking-wide mb-2 dark:text-white">
            {intl("about.values.knowledge")}
          </h3>
          <p className="text-xl text-justify tracking-wide leading-8 mb-8 text-gray dark:text-slate">
            {intl("about.values.knowledgePassage")}
          </p>
          <h3 className="text-xl font-medium tracking-wide mb-2 dark:text-white">
            {intl("about.values.collaborate")}
          </h3>
          <p className="text-xl text-justify tracking-wide leading-8 mb-8 text-gray dark:text-slate">
            {intl("about.values.collaboratePassage")}
          </p>
          <div className="text-base  text-gray dark:text-slate">
            {intl("about.picture.caption")} 😊
          </div>
        </div>
      </section>

      <section className="px-[8%] md:px-[15%] my-[10%]">
        <h1 className="flex justify-center text-4xl font-bold leading-tight mb-16 dark:text-white">
          {intl("about.academic.heading")}
        </h1>
        <CustomCard
          src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/hochschule_hof_logo.svg`}
          btnText={intl("readMore")}
          className="hover:border-green-500"
        >
          <p className="text-xl mb-1 text-nightRider dark:text-white ">
            {intl("about.academic.mastersCourseName")}
          </p>
          <p className="mb-6 text-slate dark:text-slate">
            {intl("about.academic.hofUniversity")}
          </p>
        </CustomCard>
        <CustomCard
          src={`http://aiht.ac.in/vendor/images/sym-logo.png`}
          btnText={intl("readMore")}
          className="hover:border-blue-500"
        >
          <p className="text-xl mb-1 text-nightRider dark:text-white ">
            {intl("about.academic.bachelorCourseName")}
          </p>
          <p className="mb-6 text-slate dark:text-slate">
            {intl("about.academic.anandUniversity")}
          </p>
        </CustomCard>
      </section>
    </>
  );
};

export default About;
