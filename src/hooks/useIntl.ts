import { useCallback } from "react";
import { useIntl } from "react-intl";

export type TFormatMessage = (
  id: TIntlMsgId,
  values?: { [key: string]: string }
) => string;

export default (): TFormatMessage => {
  const { formatMessage: m } = useIntl();
  return useCallback((id, values) => m({ id }, values), [m]);
};
