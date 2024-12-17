import IntlProvider from "@src/i18n/IntlProvider";
import { lazy, StrictMode } from "react";

const Boot = () => {
  const App = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
              import("@src/app/App") as unknown as PromiseLike<{
                default: never;
              }>
            ),
          0
        )
      )
  );

  return (
    <StrictMode>
      <IntlProvider>
        <App />
      </IntlProvider>
    </StrictMode>
  );
};

export default Boot;
