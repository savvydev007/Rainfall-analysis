import { Context, useContext } from "react";

/* Throws Error if Provider not mounted before calling useContextOrError to use context of a context provider */

const useContextOrError = <T>(context: Context<T | null>) => {
  const data = useContext(context);
  if (!data)
    throw new Error(
      `Please mount ${context.displayName} before using the useContext`
    );
  return data;
};

export default useContextOrError;
