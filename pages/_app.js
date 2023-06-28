// import { ReactNode } from "react";
// import { NextPage } from "next";
// import type { AppProps } from "next/app";

import "../styles/globals.css";

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactNode) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

export default function App(
  { Component, pageProps } /* : AppPropsWithLayout */
) {
  //* codigo para la anexacion de paginas con layouts
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
  // return <Component {...pageProps} />;
}
