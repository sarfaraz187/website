import useIntl from "@src/hooks/useIntl";

const Companies = () => {
  const intl = useIntl();

  return (
    <section className="px-[15%] py-14" role="companies section">
      <h1 className="flex justify-center text-4xl font-bold text-nightRider pb-8">
        {intl("home.companies")}
      </h1>
      <div className="grid place-items-center my-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <img
          src="/logo/sevencs.jpeg"
          alt="SevenCs"
          className="w-22 h-20 mb-6 lg:mb-0"
        />
        <img
          src="/logo/ost.png"
          alt="Onestoptransformation"
          className="w-20 h-20 mb-6 lg:mb-0"
        />
        <img
          src="/logo/learnship.png"
          alt="Learnship"
          className="w-44 h-22 mb-6 lg:mb-0"
        />
        <img src="/logo/mako.png" alt="Mako" className="w-25 h-20" />
      </div>
    </section>
  );
};

export default Companies;
