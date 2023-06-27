import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  //* codigo para la anexacion de paginas con layouts
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
  // return <Component {...pageProps} />;
}
