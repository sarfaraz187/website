import IntlProvider from "@src/i18n/IntlProvider";
import GoogleAnalyticsTracker from "@src/routes/GoogleAnalyticsTracker";
import { store } from "@src/store";
import { ThemeProvider } from "@src/theme-provider";
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
          <ThemeProvider storageKey="vite-ui-theme">
            <GoogleAnalyticsTracker />
            <App />
          </ThemeProvider>
        </IntlProvider>
      </Provider>
    </StrictMode>
  );
};

export default Boot;
