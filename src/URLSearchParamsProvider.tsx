import { SearchParamsContext } from "URLSearchParamsContext";

export interface URLSearchParamsProviderProps {
    children?: React.ReactNode;
}

export const URLSearchParamsProvider = (props: SearchParamsProviderProps) => {
  const {
    children
  } = props;

  return (
    <SearchParamsContext.Provider value={params}>
      {children}
    </SearchParamsContext.Provider>
  )
}
