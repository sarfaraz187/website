import { getIntl, initIntl } from "@src/i18n/intl";
import { PropsWithChildren, useEffect, useState } from "react";
import { RawIntlProvider } from "react-intl";

const IntlProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [locale] = useState("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initIntl(locale, () => setReady(true));
  }, [locale]);

  return ready ? (
    <RawIntlProvider value={getIntl()}>{children}</RawIntlProvider>
  ) : null;
};

export default IntlProvider;
