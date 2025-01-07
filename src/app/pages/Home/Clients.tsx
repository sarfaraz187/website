import useIntl from "@src/hooks/useIntl";

const Clients = () => {
  const intl = useIntl();

  return (
    <section className="px-[15%] py-8 bg-white" role="companies section">
      <h1 className="flex justify-center text-4xl font-bold text-nightRider">
        {intl("home.companies")}
      </h1>
      <div>
        Sevencs
        <br />
        Learnship
      </div>
    </section>
  );
};

export default Clients;
