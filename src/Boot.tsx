import IntlProvider from "@src/i18n/IntlProvider";
import { store } from "@src/store";
import { lazy, StrictMode } from "react";
import { Provider } from "react-redux";

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
      <Provider store={store}>
        <IntlProvider>
          <App />
        </IntlProvider>
      </Provider>
    </StrictMode>
  );
};

export default Boot;
