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
          <h1 className="text-2xl font-medium tracking-wide mb-6 dark:text-white">
            {intl("about.subTitle")}
          </h1>
          <p className="text-xl text-justify tracking-wide leading-8 mb-16 text-gray dark:text-slate">
            {intl("about.location")}
          </p>
          <h1 className="text-2xl font-medium tracking-wide my-6 dark:text-white">
            {intl("about.introduction.heading")}
          </h1>
          <p className="text-justify tracking-wide leading-8 text-2xl indent-14 mb-16 text-gray dark:text-slate">
            {intl("about.introduction.expertise")}
          </p>
        </div>
        <div className="w-full h-full flex justify-end">
          <img
            src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/ms_02.png`}
            alt={"about.altText.myName"}
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
            Here are some of the values I hold dear to me.
          </h1>
          <h3 className="text-xl font-medium tracking-wide mb-2 dark:text-white">
            Being Grateful
          </h3>
          <p className="text-xl text-justify tracking-wide leading-8 mb-8 text-gray dark:text-slate">
            You can achieve great success and master your craft, but without
            gratitude, true fulfillment will always feel just out of reach.
            Appreciating the people, experiences, and lessons along the way
            brings deeper joy and meaning to life. Stay grateful.
          </p>
          <h3 className="text-xl font-medium tracking-wide mb-2 dark:text-white">
            Share knowledge
          </h3>
          <p className="text-xl text-justify tracking-wide leading-8 mb-8 text-gray dark:text-slate">
            One of the biggest things that has helped me learn is by committing
            myself to sharing what I know with others. I force myself into
            situations where I have to be accountable to those I'm teaching to
            really know my stuff. And as a result, a lot of people have learned
            from me as well.
          </p>
          <h3 className="text-xl font-medium tracking-wide mb-2 dark:text-white">
            Collaborate with others
          </h3>
          <p className="text-xl text-justify tracking-wide leading-8 mb-8 text-gray dark:text-slate">
            I've worked with many developers in my role as a team member at
            companies I've worked at as well as in the open source community.
            I've found it to be invaluable to collaborate well with others. I
            value giving credit where it is due and celebrating the successes of
            others with them. We can accomplish much more together than
            separately.
          </p>
          <div className="text-base text-gray dark:text-slate">
            PS: The picture to the left was not taken by me. Thanks to my
            friend. 😊
          </div>
        </div>
      </section>

      <section className="px-[15%] my-[5%] ">
        <h1 className="flex justify-center text-4xl font-bold leading-tight mb-8 dark:text-white">
          My Academic Background
        </h1>
      </section>
    </>
  );
};

export default About;
