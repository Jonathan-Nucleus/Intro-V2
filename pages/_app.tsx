import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "../layout";
import { NextPageWithLayout } from "../types/next-page";
import { SignoutProvider } from "../context/signoutContext";
import { ApolloProvider } from "@apollo/client";
import apolloclient from "../assistants/apolloclient";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
     <ApolloProvider client={apolloclient}>
      <SignoutProvider>
          <RootLayout
            layout={Component.layout}
            background={Component.background}
          >
            <Component {...pageProps} />
          </RootLayout>
      </SignoutProvider>
      </ApolloProvider>
    </>
  );
}
