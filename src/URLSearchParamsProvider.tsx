import React, { useState } from 'react';
import { URLSearchParamsContext } from "./URLSearchParamsContext";

export interface URLSearchParamsProviderProps {
    children?: React.ReactNode;
}

export interface SearchParam {
    name: string,
    value: string
}

const getSearchParamsAsArray = () => {
    let searchParamsArray: SearchParam[] = [];
    let search = window.location.search;

    if (search.length === 0) {
        return searchParamsArray;
    }

    let searchParts = search.split('?');

    if (searchParts.length < 2) {
        return searchParamsArray;
    }

    searchParamsArray = searchParts[1].split('&').map((parameter: string) => {
        const nameValue = parameter.split('=');
        const [name, value] = nameValue;
        const paramObject: SearchParam = {};

        paramObject[name] = value;

    });

    return searchParamsArray;

}

export const URLSearchParamsProvider = (props: URLSearchParamsProviderProps) => {
  const {
    children
  } = props;

  const [params, setParams] = useState({});
  let searchParams = getSearchParamsAsArray();


  return (
    <URLSearchParamsContext.Provider value={params}>
      {children}
    </URLSearchParamsContext.Provider>
  )
}
