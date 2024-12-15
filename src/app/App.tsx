import useIntl from "@src/hooks/useIntl";

const App = () => {
  const intl = useIntl();
  return <div>{intl("title")}</div>;
};

export default App;
