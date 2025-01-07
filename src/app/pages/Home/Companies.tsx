import useIntl from "@src/hooks/useIntl";

const Companies = () => {
  const intl = useIntl();

  return (
    <section className="px-[15%] py-8 bg-white" role="companies section">
      <h1 className="flex justify-center text-4xl font-bold text-nightRider">
        {intl("home.companies")}
      </h1>
      <div className="grid grid-cols-4 gap-4 place-items-center my-8">
        <img
          src="/logo/sevencs.jpeg"
          alt="SevenCs"
          className="w-22 h-20 object-contain"
        />
        <img
          src="/logo/ost.png"
          alt="Onestoptransformation"
          className="w-20 h-20"
        />
        <img src="/logo/learnship.png" alt="Learnship" className="w-44 h-22" />
        <img src="/logo/mako.png" alt="Mako" className="w-25 h-20" />
      </div>
    </section>
  );
};

export default Companies;
