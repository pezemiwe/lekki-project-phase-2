import { useMemo, useCallback } from "react";
import { NavigateOptions, useSearchParams } from "react-router-dom";

export function useQueryParam(
  key: string
): [
  string | undefined | null,
  (newQuery: string, options?: NavigateOptions) => void
] {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key);

  let value = useMemo(() => paramValue, [paramValue]);

  let setValue = useCallback(
    (newValue: string, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams);

      if (newValue) {
        newSearchParams.set(key, newValue);
      } else {
        newSearchParams.delete(key);
      }
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}
