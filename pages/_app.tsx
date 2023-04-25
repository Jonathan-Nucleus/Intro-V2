import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "../layout";
import { NextPageWithLayout } from "../types/next-page";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <RootLayout layout={Component.layout}>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
