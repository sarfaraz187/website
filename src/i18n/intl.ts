import {
  createIntl,
  createIntlCache,
  IntlCache,
  IntlShape,
  MessageFormatElement,
} from "react-intl";

type Ti18nMessage =
  | Record<string, string>
  | Record<string, MessageFormatElement[]>
  | undefined;

export enum ELanguages {
  EN = "en",
  DE = "de",
}

let cache: IntlCache | undefined;
let intl: IntlShape | undefined;

const loadMessages = (locale: string) => {
  switch (locale) {
    case ELanguages.EN:
      return fetch("/i18n/en.json");
    case ELanguages.DE:
      return fetch("/i18n/de.json");
    default:
      return fetch("/i18n/en.json");
  }
};

export const initIntl = (locale: string, readyCallback: () => void) => {
  loadMessages(locale).then((response) => {
    response.json().then((messages: Ti18nMessage) => {
      cache = createIntlCache();
      intl = createIntl({ locale, messages }, cache);
      readyCallback();
    });
  });
};

export const getIntl = () => {
  if (intl === undefined) throw new Error("Intl is not initialized");
  return intl;
};
