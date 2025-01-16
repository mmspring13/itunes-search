/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useContext } from "react";

export const ItunesContext = React.createContext({});

export const useItunesContext = () => useContext(ItunesContext);

export const ItunesProvider: React.FC<React.PropsWithChildren<{
  itunesProxy: (query?: string) => Promise<void>;
}>> = ({
  children,
  itunesProxy,
}) => {
  // const search = useSearchParams();
  // const queryString = search.toString();

  // const itunesFetch = useCallback(async () => {
  //   console.log('fetchData', queryString);
  //   const data = await itunesProxy(queryString);
  //   console.log('data', data);
  // }, [itunesProxy, queryString])

  // useEffect(() => {
  //   itunesFetch();
  // }, [itunesFetch])

  return (
    <ItunesContext.Provider value={{}}>
      {children}
    </ItunesContext.Provider>
  );
};