import { getIntl, initIntl } from "@src/i18n/intl";
import { useAppSelector } from "@src/store";
import { guiSelectors } from "@src/store/gui";
import { PropsWithChildren, useEffect, useState } from "react";
import { RawIntlProvider } from "react-intl";

/**
 * Issues with the current implementation:
 * The component flickers when the language is changed.
 */
const IntlProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const lang = useAppSelector(guiSelectors.lang);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    initIntl(lang, () => setReady(true));
  }, [lang]);

  return ready ? (
    <RawIntlProvider key={lang} value={getIntl()}>
      {children}
    </RawIntlProvider>
  ) : null;
};

export default IntlProvider;
