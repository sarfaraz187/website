import useIntl from "@src/hooks/useIntl";

const Companies = () => {
  const intl = useIntl();

  return (
    <section className="px-[15%] py-[4rem] md:py-[6rem]" role="companies">
      <h1 className="flex justify-center text-[1.5rem] md:text-[2rem] mb-[4rem] md:mb-[6rem] font-bold  dark:text-white">
        {intl("home.companies")}
      </h1>
      <div className="grid place-items-center my-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <img
          src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/sevencs.jpeg`}
          alt="SevenCs"
          className="w-22 h-20 mb-6 lg:mb-0"
          loading="lazy"
        />
        <img
          src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/ost.png`}
          alt="Onestoptransformation"
          className="w-20 h-20 mb-6 lg:mb-0"
          loading="lazy"
        />
        <img
          src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/learnship.png`}
          alt="Learnship"
          className="w-44 h-22 mb-6 lg:mb-0"
          loading="lazy"
        />
        <img
          src={`${import.meta.env.VITE_BLOB_URL}portfolio-assets/mako.png`}
          alt="Mako"
          className="w-25 h-20"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Companies;
